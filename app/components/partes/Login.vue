<template>
  <!-- <page actionBarHidden="true"> -->
  <GridLayout class="fondo">
    <ScrollView>
      <StackLayout class="fondo">
        <StackLayout>
          <Image
            class="imagen"
            width="100"
            height="100"
            src="~/assets/images/logo-bash2.png"
            stretch="aspectFill"
            verticalAlignment="center"
            horizontalAlignment="center"
          ></Image>
          <StackLayout flexWrap="wrap" class="card">
            <Label
              class="login"
              text="LOGIN"
              verticalAlignment="center"
              horizontalAlignment="center"
              fontSize="30"
              color="black"
            ></Label>
            <StackLayout class="form">
              <StackLayout class="input-field">
                <TextField class="texto_entrada" hint="Correo" v-model="anfitrion.correo"></TextField>
              </StackLayout>

              <StackLayout class="input-field">
                <TextField class="texto_entrada" hint="Clave" v-model="anfitrion.clave"></TextField>
              </StackLayout>

              <Label horizontalAlignment="center" text="Don’t have an account?"></Label>
              <Label horizontalAlignment="center" text="Don’t have an account?"></Label>

              <Button text="Iniciar Sesión" class="btn btn-primary" @tap="login"></Button>

              <Label
                class="registrar"
                horizontalAlignment="center"
                text="¿No pudiste Iniciar Sesión, Registrate?"
              ></Label>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </GridLayout>
  <!-- </page> -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header_Perfil from "~/components/partes/Header_Perfil";
let Feedback = require("../../Feedback/index");
let Loader = require("../../Loader/index");
export default {
  data() {
    return {
      anfitrion: {
        correo: "ongwkevin@hotmail.com",
        clave: "kevin"
      }
    };
  },

  // computed: {
  //     ...mapState(["info_anfitrion"])
  // },

  methods: {
    ...mapActions(["login_anfitrion"]),
    async login() {
      console.log("entra");
      Loader.show({
        message: "Iniciando sesión",
        details: ""
      });
      await this.login_anfitrion(this.anfitrion)

        .then(result => {
          // this.$goto("eventos", { clearHistory: true });
          Loader.hide();
          console.log("si");
        })
        .catch(error => {
          Feedback.error({
            title: "Error",
            message: error.message
          });
          Loader.hide();
        });
    }
  },
  // created() {
  //     this.get_eventos();
  // },
  components: {
    Header_Perfil
  }
};
</script>

<style scoped>
.page {
  align-items: center;
  flex-direction: column;
}

.form {
  margin-left: 30;
  margin-right: 30;
  flex-grow: 2;
  vertical-align: middle;
}

.fondo {
  background-color: #ffd04d;
}

.login {
  margin: 20 30 20 30;
  font-weight: 600;
}

.card {
  background-color: #fff;
  margin: 20;
  width: 85%;
}

.imagen {
  margin: 20 55 5 55;
}

.texto_entrada {
  border-radius: 35;
  color: #000;
  border-width: 1;
  border-color: #f2f2f2;
  padding-left: 20;
  placeholder-color: #a8a8a8;
  margin: 0 5 25 5;
}

.btn {
  margin-bottom: 20;
  margin-top: 30;
  padding: 20;
  background-color: #ffd04d;
  border-radius: 5;
  color: #fff;
}

.registrar {
  margin-bottom: 20;
}
</style>