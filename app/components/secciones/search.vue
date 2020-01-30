<template>
  <StackLayout>
    <GridLayout columns="auto, *, auto">
      <Label
        col="0"
        text.decode="&#xf002;"
        class="fa"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
        color="black"
      ></Label>
      <Label col="1" text="Search" fontSize="20" verticalAlignment="center" padding="10"></Label>
      <Label
        col="2"
        text.decode="&#xf16d;"
        class="fa"
        fontSize="25"
        verticalAlignment="center"
        padding="10"
        color="black"
      ></Label>
    </GridLayout>

    <ScrollView orientation="horizontal" scrollBarIndicatorVisible="false">
      <StackLayout orientation="horizontal">
        <GridLayout v-for="item in search.header" height="90" rows="auto" style="margin: 5;">
          <Image
            borderRadius="10%"
            row="0"
            :src="item.imageSrc"
            height="90"
            width="100"
            stretch="aspectFill"
          ></Image>
          <Image
            v-if="item.isOwn"
            borderRadius="100%"
            row="0"
            src="~/assets/wk.png"
            height="40"
            verticalAlignment="top"
            width="40"
            stretch="aspectFill"
            marginTop="10"
          ></Image>
          <Label
            row="0"
            :text="item.title"
            color="white"
            fontSize="15"
            fontWeight="bold"
            verticalAlignment="bottom"
            horizontalAlignment="center"
            marginBottom="10"
            :class="{ shisown: item.isOwn }"
          ></Label>
        </GridLayout>
      </StackLayout>
    </ScrollView>

    <GridLayout rows="auto, auto" columns="*, *, *" marginTop="5">
      <Image
        bordercolor="white"
        borderWidth="1"
        row="0"
        col="0"
        :src="search.midSection.imgSrc"
        stretch="aspectFill"
      ></Image>
      <Image
        bordercolor="white"
        borderWidth="1"
        row="1"
        col="0"
        :src="search.midSection.imgSrc1"
        stretch="aspectFill"
      ></Image>
      <Image
        bordercolor="white"
        borderWidth="1"
        row="0"
        col="1"
        rowspan="2"
        colspan="2"
        :src="search.midSection.imgSrc2"
        stretch="aspectFill"
      ></Image>
    </GridLayout>

    <FlexboxLayout flexWrap="wrap" width="100%">
      <Image
        v-for="item in search.body"
        bordercolor="white"
        borderWidth="1"
        :src="item.imageSrc"
        :height="photoHeight"
        :width="photoWidth"
        stretch="aspectFill"
      ></Image>
    </FlexboxLayout>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      search: {
        header: [
          {
            isOwn: true,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg",
            title: "For You"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010__480.jpg",
            title: "Style"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
            title: "Fitness"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372__480.jpg",
            title: "Comics"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg",
            title: "Beauty"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__480.jpg",
            title: "Travel"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg",
            title: "Science & Tech"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg",
            title: "Shopping"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/09/14/44/leaf-3865014__480.jpg",
            title: "Decor"
          },
          {
            isOwn: false,
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/07/16/13/17/kiss-3541905__480.jpg",
            title: "Music"
          }
        ],
        body: [
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg"
          },
          {
            imageSrc: "~/assets/face2.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/09/14/44/leaf-3865014__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/07/16/13/17/kiss-3541905__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/09/14/44/leaf-3865014__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/10/05/22/53/sheep-3727049__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg"
          },
          {
            imageSrc:
              "https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg"
          }
        ],
        midSection: {
          imgSrc:
            "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg",
          imgSrc1:
            "https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__480.jpg",
          imgSrc2:
            "https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg"
        }
      }
    };
  }
};
</script>
