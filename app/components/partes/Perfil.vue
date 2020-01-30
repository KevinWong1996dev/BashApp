<template>
  <StackLayout>
    <Header_Perfil class="header"></Header_Perfil>
    <ScrollView class="tarjeta">
      <StackLayout class="fondo">
        <StackLayout flexWrap="wrap" class="card">
          <Image
            class="imagen"
            width="190"
            height="190"
            borderRadius="100"
            src="~/assets/images/face1.jpg"
            stretch="aspectFill"
            verticalAlignment="center"
            horizontalAlignment="center"
          ></Image>
          <GridLayout class="Datos" rows="auto,auto,auto">
            <Label
              row="0"
              text="COLOR FEST"
              verticalAlignment="center"
              horizontalAlignment="center"
              fontSize="20"
              color="black"
            ></Label>
            <Label
              row="1"
              text="ROBERTO FERNANDEZ"
              verticalAlignment="center"
              horizontalAlignment="center"
              fontSize="21"
            ></Label>
            <Label
              row="2"
              text="Guayas, Guayaquil, Ecuador"
              verticalAlignment="center"
              horizontalAlignment="center"
              fontSize="15"
            ></Label>
          </GridLayout>

          <GridLayout class="stars" columns="auto,auto,auto,auto,auto" horizontalAlignment="center">
            <Label
              col="0"
              text.decode="&#xf005;"
              class="fa"
              fontSize="25"
              verticalAlignment="center"
              horizontalAlignment="center"
              padding="7"
              color="yellow"
            ></Label>
            <Label
              col="1"
              text.decode="&#xf005;"
              class="fa"
              fontSize="25"
              verticalAlignment="center"
              horizontalAlignment="center"
              padding="7"
              color="yellow"
            ></Label>
            <Label
              col="2"
              text.decode="&#xf005;"
              class="fa"
              fontSize="25"
              verticalAlignment="center"
              horizontalAlignment="center"
              padding="7"
              color="yellow"
            ></Label>
            <Label
              col="3"
              text.decode="&#xf005;"
              class="fa"
              fontSize="25"
              verticalAlignment="center"
              horizontalAlignment="center"
              padding="7"
              color="yellow"
            ></Label>
            <Label
              col="4"
              text.decode="&#xf005;"
              class="fa"
              fontSize="25"
              verticalAlignment="center"
              horizontalAlignment="center"
              padding="7"
              color="#f2f1f6"
            ></Label>
          </GridLayout>
        </StackLayout>
        <GridLayout>
          <GridLayout flexWrap="wrap" class="cardevento" rows="*,*">
            <GridLayout row="0" columns="auto,auto" class="perfilnombres">
              <Image
                class="imagen2"
                col="0"
                src="~/assets/images/face1.jpg"
                stretch="aspectFill"
                verticalAlignment="center"
                horizontalAlignment="center"
              ></Image>
              <Label
                col="1"
                text="evento.nombre"
                fontSize="20"
                verticalAlignment="center"
                horizontalAlignment="left"
                padding="10"
              ></Label>
            </GridLayout>
            <Image
              row="1"
              class="imagenevento"
              src="~/assets/images/face1.jpg"
              stretch="aspectFill"
              verticalAlignment="center"
              horizontalAlignment="center"
            ></Image>
          </GridLayout>
        </GridLayout>
        <Button text="Cerrar Sesión" class="btn btn-primary" @tap="cerrar"></Button>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header_Perfil from "~/components/partes/Header_Perfil";
let Feedback = require("../../Feedback/index");
let Loader = require("../../Loader/index");

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["cerrar_sesion"])
  },

  methods: {
    ...mapActions(["cerrar_sesion"]),
    async cerrar() {
      Loader.show({
        message: "Cerrando sesión",
        details: ""
      });
      this.cerrar_sesion();
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

.btn {
  margin-bottom: 20;
  margin-top: 30;
  padding: 20;
  background-color: #ffd04d;
  border-radius: 5;
  color: #fff;
}
</style>