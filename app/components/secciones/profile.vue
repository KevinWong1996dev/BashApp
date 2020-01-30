<template>
  <StackLayout>
    <Login v-if="!sessionFlag"></Login>
    <Perfil v-if="sessionFlag"></Perfil>
  </StackLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Login from "~/components/partes/Login";
import Perfil from "~/components/partes/Perfil";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["sessionFlag"])
  },

  // methods: {
  //   ...mapActions(["get_eventos"])
  // },
  // created() {
  //   this.get_eventos();
  // },
  components: {
    Login,
    Perfil
  }
};
</script>

<style scoped>
.fondo {
  background-color: #f2f1f6;
  width: 100%;
}

/* .tarjeta {
  width: 100%;
} */

.card {
  background-color: #fff;
  margin: 20;
  width: 85%;
}

.cardevento {
  background-color: #fff;
  border-radius: 25;
  margin: 20;
  width: 95%;
}

.imagen {
  margin: 55 55 20 55;
}

.imagenevento {
  border-radius: 30;
  margin: 7 10 45 10;
}

.Datos {
  margin: 10;
}

.imagen2 {
  width: 50;
  height: 50;
  margin: 10;
  border-radius: 40;
}

.perfilnombres {
  margin: 15;
}
</style>