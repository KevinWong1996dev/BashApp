import NSVuexPersistent from 'ns-vuex-persistent'
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    mensaje: "Hola mundo",

    api_url: "https://bash-parties.appspot.com/api/v1/",
    sessionFlag: false,
    anfitrion: {},
    eventos: [],
    access_token: "",
    refresh_token: ""
  },

  mutations: {
    iniciar_sesion(state) {
      state.sessionFlag = true
    },

    cerrar_sesion(state) {
      state.sessionFlag = false
      state.anfitrion = {}
      state.access_token = ''
      state.refresh_token = ''

    },

    guardar_anfitrion(state, payload) {
      state.anfitrion = payload
    },

    guardar_eventos(state, payload) {
      state.eventos = payload;
    },

    guardar_token(state, payload) {
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token
    }
  },
  actions: {


    obtener_token(context, payload) {
      return new Promise((resolve, reject) => {

        axios({
          method: 'POST',
          url: context.state.api_url + 'usuarios/no_usuario',
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then(
          result => {
            context.commit('guardar_token', result.data.data)
            resolve(result)
          },
          error => {
            console.log(error + ' ErrorAlIngresar')
            reject(error.response.data)
          }
        )
      })
    },

    login_anfitrion(context, payload) {
      return new Promise((resolve, reject) => {
        let formData = new FormData()
        formData.append('correo', payload.correo)
        formData.append('clave', payload.clave)

        axios({
          method: 'POST',
          url: context.state.api_url + 'usuarios/login',
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData
        }).then(
          result => {
            context.commit('iniciar_sesion')
            context.commit('guardar_token', result.data.data)
            context.commit('guardar_anfitrion', result.data.data.correo)
            resolve(result)
          },
          error => {
            console.log(error + ' ErrorAlIngresar')
            reject(error.response.data)
          }
        )
      })
    },

    async get_eventos(context) {
      await axios({
        method: "GET",
        url: context.state.api_url + "eventos",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + context.state.access_token
        }
      }).then(
        result => {
          context.commit("guardar_eventos", result.data.data);
        },
        error => {
          console.log(error + " ErrorConseguirEventos");
        }
      );
    },



  },
  plugins: [NSVuexPersistent([
    // Here you will define the states that you want to be persistent.
    'api_url',
    'access_token',

  ])]
});
