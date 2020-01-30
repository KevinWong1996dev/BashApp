<template>
  <GridLayout
    rows="30, 30, *, auto"
    columns="10, auto,10, *, auto"
    v-for="item in body"
    marginTop="5"
  >
    <Image
      row="0"
      rowSpan="2"
      col="1"
      :src="item.imageSrc"
      borderRadius="100%"
      height="40"
      width="40"
      verticalAlignment="center"
      horizontalAlignment="center"
      stretch="aspectFill"
    ></Image>
    <Label
      row="0"
      rowSpan="2"
      col="1"
      text=""
      borderRadius="100%"
      height="50"
      width="50"
      style="border-width: 2; border-color: #ff4b60;;"
    ></Label>
    <Label
      row="0"
      col="3"
      :text="item.name"
      verticalAlignment="bottom"
      color="black"
    ></Label>
    <Label
      row="1"
      col="3"
      :text="item.location"
      verticalAlignment="top"
      color="#4c4c4c"
    ></Label>
    <Label
      row="0"
      rowSpan="2"
      col="4"
      text.decode="&#xf142;"
      class="fa android-lbl"
      fontSize="25"
      verticalAlignment="center"
      paddingright="25"
      margintop="5"
    ></Label>
    <Image
      marginTop="10"
      row="2"
      col="0"
      colSpan="5"
      :src="item.post"
      stretch="aspectFill"
    ></Image>
    <GridLayout
      row="3"
      col="0"
      colSpan="5"
      rows="auto, auto, auto, auto, auto"
      columns="auto, auto, auto, *, auto"
      margintop="5"
      marginbottom="20"
    >
      <Label
        row="0"
        col="0"
        text.decode="&#xf004;"
        class="fa android-lbl"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
      ></Label>
      <Label
        row="0"
        col="1"
        text.decode="&#xf075;"
        class="fa android-lbl"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
      ></Label>
      <Label
        row="0"
        col="2"
        text.decode="&#xf1d8;"
        class="fa android-lbl"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
      ></Label>
      <Label
        row="0"
        col="4"
        text.decode="&#xf02e;"
        class="fa android-lbl"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
      ></Label>
      <Label
        row="1"
        col="0"
        colSpan="5"
        :text="item.likes + 'Likes'"
        verticalAlignment="bottom"
        color="black"
        paddingleft="10"
        fontSize="16"
      ></Label>
      <Label
        marginLeft="10"
        row="2"
        col="0"
        colSpan="5"
        verticalAlignment="bottom"
        textWrap="true"
      >
        <FormattedString>
          <Span :text="item.desc.person" color="black"></Span>
          <Span :text="item.desc.content" color="#2E93F0"></Span>
        </FormattedString>
      </Label>
      <Label
        row="3"
        col="0"
        colSpan="5"
        text="...more"
        verticalAlignment="bottom"
        paddingleft="10"
        color="#4c4c4c"
      ></Label>
      <Label
        row="4"
        col="0"
        colSpan="5"
        :text="item.time"
        verticalAlignment="bottom"
        paddingleft="10"
        color="#4c4c4c"
      ></Label>
    </GridLayout>
  </GridLayout>
</template>

<script>
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
      ]
    };
  }
};
</script>
