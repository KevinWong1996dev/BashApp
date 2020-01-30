<template>
  <!-- header -->
  <StackLayout borderBottomColor="gray">
    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
      <StackLayout orientation="horizontal">
        <GridLayout v-for="header in headers" height="70" rows="auto, auto" style="margin: 3;">
          <Image
            row="0"
            :src="header.imageSrc"
            borderRadius="100%"
            verticalAlignment="center"
            horizontalAlignment="center"
            stretch="aspectFill"
            :class="{
                  imgheaderown: header.isOwn,
                  imgheader: !header.isOwn
                }"
          ></Image>
          <Label
            row="0"
            text
            borderRadius="100%"
            height="70"
            width="70"
            v-show="!header.isOwn ? 'visible' : 'collapsed'"
            style="border-width: 2; border-color: #ff4b60;"
          ></Label>
          <Label
            v-if="header.isOwn"
            row="0"
            borderRadius="100%"
            width="30"
            height="30"
            text.decode="&#xf055;"
            fontSize="30"
            backgroundColor="white"
            color="#2E93F0"
            class="fa"
            textAlignment="center"
            verticalAlignment="bottom"
            horizontalAlignment="center"
            marginLeft="70"
          ></Label>
          <Label row="1" :text="headers.title" color="black" textAlignment="center" marginTop="3"></Label>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hola Kevin!",
      headers: [
        {
          isOwn: true,
          imageSrc: "~/assets/images/wk.png",
          title: "Your Story"
        },
        {
          isOwn: false,
          imageSrc: "~/assets/images/face1.jpg",
          title: "william"
        },
        {
          isOwn: false,
          imageSrc: "~/assets/images/face3.jpg",
          title: "pavlo"
        },
        {
          isOwn: false,
          imageSrc: "~/assets/images/face4.jpg",
          title: "kumaran"
        },
        {
          isOwn: false,
          imageSrc: "~/assets/images/face3.jpg",
          title: "john"
        },
        {
          isOwn: false,
          imageSrc: "~/assets/images/face2.jpg",
          title: "dena007"
        }
      ]
    };
  }
};
</script>
