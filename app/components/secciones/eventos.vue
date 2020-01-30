<template>
  <StackLayout>
    <Header class="header"></Header>
    <ScrollView ref="scrollView" @scroll="onScroll">
      <GridLayout columns="*,*" class="acciones" ref="topView">
        <Button text="FIESTAS" class="botonfiesta" col="0" />
        <Button text="DESCUBRE" class="botondescubre" col="1" />
      </GridLayout>
    </ScrollView>

    <ScrollView class="tarjeta">
      <StackLayout class="fondo">
        <StackLayout flexWrap="wrap" v-for="evento in eventos" class="card">
          <!-- <ListView for="evento in eventos">
          <v-template>-->
          <Image class="imagen" :src="evento.imagen" stretch="aspectFill"></Image>
          <GridLayout columns="auto, *, auto" class="nombres_eventos">
            <Image
              class="imagen2"
              col="0"
              :src="evento.imagen"
              verticalAlignment="center"
              padding="10"
              stretch="aspectFill"
            ></Image>
            <Label
              col="1"
              :text="evento.nombre"
              fontSize="20"
              verticalAlignment="center"
              padding="10"
            ></Label>
            <GridLayout columns="*,*,*" col="2" verticalAlignment="center">
              <Label
                v-show="evento.es_18"
                col="0"
                text.decode="&#xf067;"
                class="fa"
                fontSize="25"
                verticalAlignment="center"
                padding="7"
                color="black"
              ></Label>
              <Label
                v-show="evento.es_da"
                col="1"
                text.decode="&#xf0fc;"
                class="fa"
                fontSize="25"
                verticalAlignment="center"
                padding="7"
                color="black"
              ></Label>
              <Label
                col="2"
                text.decode="&#xf073;"
                class="fa"
                fontSize="25"
                verticalAlignment="center"
                padding="7"
                color="black"
              ></Label>
            </GridLayout>
          </GridLayout>
          <!-- </v-template>
          </ListView>-->
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "~/components/partes/Header";

export default {
  data() {
    return {
      photos: [
        "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
        "https://cdn.pixabay.com/photo/2018/09/22/17/05/ara-3695678__480.jpg",
        "https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244__480.jpg",
        "https://cdn.pixabay.com/photo/2018/09/26/21/24/sweet-corn-3705687__480.jpg"
      ]
    };
  },

  computed: {
    ...mapState(["eventos"])
  },

  methods: {
    ...mapActions(["get_eventos"]),
    onScroll: function() {
      //access to the native event
      const scrollView = this.$refs.scrollView.nativeView;
      const topView = this.$refs.topView.nativeView;

      // if the offset is less than the height of the header.
      if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect.
          topView.animate({ translate: { x: 0, y: offset } }).then(
            () => {},
            () => {}
          );
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset);
        }
      }
    }
  },
  created() {
    this.get_eventos();
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.fondo {
  background-color: #f2f1f6;
  width: 100%;
}

.tarjeta {
  width: 100%;
}

.card {
  background-color: #fff;
  border-radius: 25;
  margin: 10;
  width: 95%;
}

.acciones {
  height: 60;
  width: 80%;
  margin: 0;
}

.botonfiesta {
  height: 50;
  width: 120;
  background-color: #ffd04d;
  color: #fff;
  border-radius: 35;
}

.botondescubre {
  height: 50;
  width: 120;
  border-color: transparent;
  color: #ffd04d;
  background-color: transparent;
  border-radius: 35;
  outline: 0 !important;
  outline-offset: 0 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.imagen {
  border-radius: 30;
  margin: 10;
}

.imagen2 {
  width: 50;
  height: 50;
  margin: 10;
  border-radius: 40;
}

.nombres_eventos {
  /* margin: 15; */
}
</style>