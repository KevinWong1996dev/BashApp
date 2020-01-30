<template>
<Page actionBarHidden="true">
    <GridLayout rows="auto, * ,50" class="page">
        <Navigation></Navigation>
        <ScrollView row="1" v-show="selectedRoute == 'home' ? 'visible' : 'collapse'">
            <StackLayout>
                <Historias></Historias>
                <GridLayout rows="30, 30, *, auto" columns="10, auto,10, *, auto" v-for="item in body" marginTop="5">
                    <Image row="0" rowSpan="2" col="1" :src="item.imageSrc" borderRadius="100%" height="40" width="40" verticalAlignment="center" horizontalAlignment="center" stretch="aspectFill"></Image>
                    <Label row="0" rowSpan="2" col="1" text="" borderRadius="100%" height="50" width="50" style="border-width: 2; border-color: #ff4b60;;"></Label>
                    <Label row="0" col="3" :text="item.name" verticalAlignment="bottom" color="black"></Label>
                    <Label row="1" col="3" :text="item.location" verticalAlignment="top" color="#4c4c4c"></Label>
                    <Label row="0" rowSpan="2" col="4" text.decode="&#xf142;" class="fa android-lbl" fontSize="25" verticalAlignment="center" paddingright="25" margintop="5"></Label>
                    <Image marginTop="10" row="2" col="0" colSpan="5" :src="item.post" stretch="aspectFill"></Image>
                    <GridLayout row="3" col="0" colSpan="5" rows="auto, auto, auto, auto, auto" columns="auto, auto, auto, *, auto" margintop="5" marginbottom="20">
                        <Label row="0" col="0" text.decode="&#xf004;" class="fa android-lbl" fontSize="25" verticalAlignment="center" padding="10"></Label>
                        <Label row="0" col="1" text.decode="&#xf075;" class="fa android-lbl" fontSize="25" verticalAlignment="center" padding="10"></Label>
                        <Label row="0" col="2" text.decode="&#xf1d8;" class="fa android-lbl" fontSize="25" verticalAlignment="center" padding="10"></Label>
                        <Label row="0" col="4" text.decode="&#xf02e;" class="fa android-lbl" fontSize="25" verticalAlignment="center" padding="10"></Label>
                        <Label row="1" col="0" colSpan="5" :text="item.likes + 'Likes'" verticalAlignment="bottom" color="black" paddingleft="10" fontSize="16"></Label>
                        <Label marginLeft="10" row="2" col="0" colSpan="5" verticalAlignment="bottom" textWrap="true">
                            <FormattedString>
                                <Span :text="item.desc.person" color="black"></Span>
                                <Span :text="item.desc.content" color="#2E93F0"></Span>
                            </FormattedString>
                        </Label>
                        <Label row="3" col="0" colSpan="5" text="...more" verticalAlignment="bottom" paddingleft="10" color="#4c4c4c"></Label>
                        <Label row="4" col="0" colSpan="5" :text="item.time" verticalAlignment="bottom" paddingleft="10" color="#4c4c4c"></Label>
                    </GridLayout>
                </GridLayout>
            </StackLayout>
        </ScrollView>
        <!-- search screen -->
        <ScrollView row="1" v-show="selectedRoute == 'search' ? 'visible' : 'collapse'">
            <Search></Search>
        </ScrollView>

        <!-- profile screen -->
        <ScrollView row="1" v-show="selectedRoute == 'profile' ? 'visible' : 'collapse'">
            <Profile></Profile>
        </ScrollView>

        <GridLayout row="1" rows="auto, *" v-show="selectedRoute == 'notifications' ? 'visible' : 'collapse'">
            <Notifications></Notifications>

            <ScrollView row="1">
                <StackLayout>
                    <GridLayout rows="auto, auto" columns="10, auto,10, *">
                        <Label row="0" col="1" rowSpan="2" text.decode="&#xf2bd;" class="fa followreq-image" verticalAlignment="top"></Label>
                        <Label row="0" col="1" rowSpan="2" text="2" borderRadius="100%" width="20" style="background: #ff4b60; color: white; margin-top: 25;" verticalAlignment="top" horizontalAlignment="right" textAlignment="center"></Label>
                        <StackLayout row="0" rowSpan="2" col="3" marginTop="30">
                            <Label text="Follow Requests" fontSize="16" fontweight="bold" color="black"></Label>
                            <Label text="Approve or ignore requests" fontSize="14" color="#4c4c4c" marginTop="3"></Label>
                        </StackLayout>
                    </GridLayout>

                    <GridLayout rows="auto, auto" columns="10, *" v-for="item in notifications">
                        <Label row="0" col="1" :text="item.notify_time" marginTop="20" marginBottom="20" color="#4c4c4c"></Label>

                        <StackLayout orientation="vertical" row="1" col="1">
                            <GridLayout columns="auto,10, *, auto, 10" v-for="notify_list in item.notify_list" orientation="vertical" marginBottom="20">
                                <Image :src="notify_list.imageSrc" col="0" borderRadius="100%" height="60" width="60" verticalAlignment="center" horizontalAlignment="center" stretch="aspectFill"></Image>
                                <StackLayout col="2" verticalAlignment="center">
                                    <Label textWrap="true">
                                        <FormattedString>
                                            <Span :text="notify_list.desc.name" fontWeight="bold" color="black"></Span>
                                            <Span :text="notify_list.desc.content" color="black"></Span>
                                            <Span :text="notify_list.desc.date" color="#4c4c4c"></Span>
                                        </FormattedString>
                                    </Label>
                                </StackLayout>
                                <Image v-if="notify_list.imageSrc2" :src="notify_list.imageSrc2" col="3" borderRadius="5" height="60" width="60" verticalAlignment="center" horizontalAlignment="center" stretch="aspectFill"></Image>
                            </GridLayout>
                        </StackLayout>
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>

        <!-- fin notification -->

        <GridLayout row="1" v-if="selectedRoute == 'loading' ? true : false" verticalAlignment="center">
            <ActivityIndicator busy="true" class="activity-indicator" color="black"></ActivityIndicator>
        </GridLayout>

        <GridLayout row="2" columns="*,*,*,*,*" borderTopWidth="0.5" borderTopColor="gray">
            <Label text.decode="&#xf015;" col="0" class="fa android-lbl" fontSize="25" textAlignment="center" verticalAlignment="center" :class="{
                tabselected: isSelected == '0' ? true : false,
                tabnotselected: isselected != '0' ? false : true
              }" horizontalAlignment="center" (tap)="onNavtap('home', '0')"></Label>
            <Label text.decode="&#xf002;" col="1" class="fa android-lbl" fontSize="25" textAlignment="center" verticalAlignment="center" :class="{
                tabselected: isSelected == '1' ? true : false,
                tabnotselected: isselected != '1' ? false : true
              }" horizontalAlignment="center" (tap)="onNavtap('search', '1')"></Label>
            <Label text.decode="&#xf196;" (tap)="takePhoto()" col="2" class="fa android-lbl" fontSize="30" textAlignment="center" verticalAlignment="center" horizontalAlignment="center"></Label>
            <Label text.decode="&#xf08a;" col="3" class="fa android-lbl" fontSize="25" textAlignment="center" :class="{
                tabselected: isSelected == '3' ? true : false,
                tabnotselected: isselected != '3' ? false : true
              }" verticalAlignment="center" horizontalAlignment="center" (tap)="onNavtap('notifications', '3')"></Label>
            <Label text.decode="&#xf007;" col="4" class="fa android-lbl" fontSize="25" textAlignment="center" verticalAlignment="center" :class="{
                tabselected: isSelected == '4' ? true : false,
                tabnotselected: isselected != '4' ? false : true
              }" horizontalAlignment="center" (tap)="onNavtap('profile', '4')"></Label>
        </GridLayout>
        <!-- </StackLayout>
                </ScrollView> -->
    </GridLayout>
</Page>
</template>

<script lang="ts">
import {
    mapState
} from "vuex";
import Historias from "~/components/secciones/historias.vue";
import Search from "~/components/secciones/search.vue";
import Profile from "~/components/secciones/profile.vue";
import Notifications from "~/components/secciones/notifications.vue";

import Navigation from "~/components/secciones/navigation.vue";
export default {
    data() {
        return {
            body: [{
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
                    post: "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg",
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
                    post: "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg",
                    likes: "500",
                    desc: {
                        person: "William ",
                        content: "#throwback"
                    },
                    time: "4 hours ago"
                },
                {
                    imageSrc: "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
                    name: "#NativeScript",
                    location: "Bedford MA",
                    post: "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
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
                    post: "https://cdn.pixabay.com/photo/2018/10/31/22/42/surprised-3786845__480.jpg",
                    likes: "150",
                    desc: {
                        person: "dena007 ",
                        content: "#throwback"
                    },
                    time: "9 hours ago"
                }
            ],

            notifications: [{
                    notify_time: "Yesterday",
                    notify_list: [{
                            imageSrc: "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg",
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
                            imageSrc2: "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg"
                        }
                    ]
                },
                {
                    notify_time: "This Week",
                    notify_list: [{
                            imageSrc: "~/assets/images/face1.jpg",
                            desc: {
                                name: "William ",
                                content: "liked your post. ",
                                date: "4d"
                            },
                            imageSrc2: "~/assets/images/wk.png"
                        },
                        {
                            imageSrc: "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
                            desc: {
                                name: "NativeScript ",
                                content: "shared their first post. ",
                                date: "5d"
                            },
                            imageSrc2: "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png"
                        }
                    ]
                },
                {
                    notify_time: "This Month",
                    notify_list: [{
                            imageSrc: "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg",
                            desc: {
                                name: "William, and Pavlo ",
                                content: "shared 20 photos. ",
                                date: "1w"
                            },
                            imageSrc2: ""
                        },
                        {
                            imageSrc: "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg",
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
                    notify_list: [{
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
