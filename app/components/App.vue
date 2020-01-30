<template>
  <Page class="page" actionBarHidden="true">
    <StackLayout>
      <BottomNavigation selectedIndex="0">
        <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
        <TabStrip>
          <TabStripItem>
            <Image src.decode="font://&#xf015;" class="fa t-36"></Image>
            <Label text="Home" />
          </TabStripItem>

          <TabStripItem>
            <Label text="Perfil" />
            <Image src.decode="font://&#xf0c0;" class="fa t-36"></Image>
          </TabStripItem>

          <TabStripItem>
            <Label text="Perfil" />
            <Image src.decode="font://&#xf007;" class="fa t-36"></Image>
          </TabStripItem>

          <!-- <TabStripItem>
                    <Label text="Home"></Label>
                    <Label src="font://&#xf015;" class="fas" />
                </TabStripItem>

                <TabStripItem class="special">
                    <Label text="Account"></Label>
                    <Label src="font://&#xf155;" class="fas" />
          </TabStripItem>-->

          <!-- 
                    The below two conventions (shorthand vs exteded syntax) are identical in UI outcome but the second one will provide you with greater control over your TabStripItem UI.
                    When using the first shorthand syntax then your Icon Font CSS class should be set on the BottomNavigation element.
          -->
          <!-- <TabStripItem title="Search" iconSource="font://&#xf00e;"></TabStripItem> -->
          <!-- <TabStripItem class="special">
                    <Label text="Search"></Label>
                    <Label src="font://&#xf1da;" class="fas" />
          </TabStripItem>-->
        </TabStrip>

        <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
        <TabContentItem>
          <Eventos />
        </TabContentItem>
        <TabContentItem>
          <Historias />
        </TabContentItem>
        <TabContentItem>
          <Profile />
        </TabContentItem>
      </BottomNavigation>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { mapState } from "vuex";
import Historias from "~/components/secciones/historias.vue";
import Search from "~/components/secciones/search.vue";
import Profile from "~/components/secciones/profile.vue";
import Eventos from "~/components/secciones/eventos.vue";

import Notifications from "~/components/secciones/notifications.vue";

import Navigation from "~/components/secciones/navigation.vue";
export default {
  data() {
    return {
      body: [
        {
          imageSrc: "~/assets/images/face3.jpg",
          name: "Pavlo",
          location: "Lisbon Portugal",
          post: "~/assets/images/wk.png",
          likes: "400",
          desc: {
            person: "Pavlo ",
            content: "#woorkout.pt#startup"
          },
          time: "2 hours ago"
        },
        {
          imageSrc: "~/assets/images/face4.jpg",
          name: "Kumaran",
          location: "Bangalore India",
          post:
            "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg",
          likes: "300",
          desc: {
            person: "Kumaran ",
            content: "#throwback"
          },
          time: "3 hours ago"
        },
        {
          imageSrc: "~/assets/images/face1.jpg",
          name: "William",
          location: "Indiana US",
          post:
            "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
          likes: "500",
          desc: {
            person: "William ",
            content: "#throwback"
          },
          time: "4 hours ago"
        },
        {
          imageSrc:
            "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
          name: "#NativeScript",
          location: "Bedford MA",
          post:
            "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
          likes: "1000",
          desc: {
            person: "NativeScript ",
            content: "#throwback"
          },
          time: "6 hours ago"
        },
        {
          imageSrc: "~/assets/images/face2.jpg",
          name: "John",
          location: "San Francisco",
          post: "~/assets/images/face2.jpg",
          likes: "100",
          desc: {
            person: "John ",
            content: "#throwback"
          },
          time: "7 hours ago"
        },
        {
          imageSrc: "~/assets/images/face3.jpg",
          name: "dena007",
          location: "CA",
          post:
            "https://cdn.pixabay.com/photo/2018/10/31/22/42/surprised-3786845__480.jpg",
          likes: "150",
          desc: {
            person: "dena007 ",
            content: "#throwback"
          },
          time: "9 hours ago"
        }
      ],

      notifications: [
        {
          notify_time: "Yesterday",
          notify_list: [
            {
              imageSrc:
                "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg",
              desc: {
                name: "William, Pavlo, and kumaran ",
                content: "shared 15 photos. ",
                date: "1d"
              },
              imageSrc2: ""
            },
            {
              imageSrc: "~/assets/images/face4.jpg",
              desc: {
                name: "kumaran ",
                content: "liked your post. ",
                date: "1d"
              },
              imageSrc2: "~/assets/images/wk.png"
            },
            {
              imageSrc: "~/assets/images/face3.jpg",
              desc: {
                name: "Pavlo ",
                content: "commented: Looks cool😜. ",
                date: "1d"
              },
              imageSrc2:
                "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg"
            }
          ]
        },
        {
          notify_time: "This Week",
          notify_list: [
            {
              imageSrc: "~/assets/images/face1.jpg",
              desc: {
                name: "William ",
                content: "liked your post. ",
                date: "4d"
              },
              imageSrc2: "~/assets/images/wk.png"
            },
            {
              imageSrc:
                "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
              desc: {
                name: "NativeScript ",
                content: "shared their first post. ",
                date: "5d"
              },
              imageSrc2:
                "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png"
            }
          ]
        },
        {
          notify_time: "This Month",
          notify_list: [
            {
              imageSrc:
                "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg",
              desc: {
                name: "William, and Pavlo ",
                content: "shared 20 photos. ",
                date: "1w"
              },
              imageSrc2: ""
            },
            {
              imageSrc:
                "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg",
              desc: {
                name: "Pavlo, and kumaran ",
                content: "shared 10 photos. ",
                date: "3w"
              },
              imageSrc2: ""
            }
          ]
        },
        {
          notify_time: "Earlier",
          notify_list: [
            {
              imageSrc: "~/assets/images/face4.jpg",
              desc: {
                name: "Kumaran ",
                content: "started following you. ",
                date: "5w"
              },
              imageSrc2: ""
            },
            {
              imageSrc: "~/assets/images/face3.jpg",
              desc: {
                name: "Pavlo ",
                content: "started following you. ",
                date: "8w"
              },
              imageSrc2: ""
            },
            {
              imageSrc: "~/assets/images/face1.jpg",
              desc: {
                name: "William ",
                content: "started following you. ",
                date: "14w"
              },
              imageSrc2: ""
            }
          ]
        }
      ]
    };
  },
  components: {
    Eventos,
    Historias,
    Search,
    Navigation,
    Profile,
    Notifications
  },

  computed: {
    ...mapState(["mensaje"])
  },
  created() {
    console.log("llega");
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

GridLayout {
  padding-bottom: 10;
}

.my-lbl {
  width: 250;
  height: 100%;
  border-color: darkred;
  color: darkred;
  background-color: rgb(207, 112, 112);
  border-width: 2;
  border-radius: 10;
  font-size: 50;
  font-weight: bold;
  text-align: center;
  margin: 10;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
