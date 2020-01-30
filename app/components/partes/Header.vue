<template>
  <GridLayout height="50" columns="*,*,*" class="header">
    <Label
      text="BASH"
      fontSize="25"
      col="1"
      class="fa android-lbl"
      textAlignment="center"
      verticalAlignment="center"
      horizontalAlignment="center"
    ></Label>

    <GridLayout columns="*,*,*" col="2">
      <Label
        text.decode="&#xf002;"
        fontSize="20"
        col="0"
        class="fa android-lbl"
        textAlignment="center"
        verticalAlignment="center"
        horizontalAlignment="center"
      ></Label>
      <Label
        text.decode="&#xf1de;"
        fontSize="20"
        col="1"
        class="fa android-lbl"
        textAlignment="center"
        verticalAlignment="center"
        horizontalAlignment="center"
      ></Label>
      <Label
        text.decode="&#xf073;"
        fontSize="20"
        col="2"
        class="fa android-lbl"
        textAlignment="center"
        verticalAlignment="center"
        horizontalAlignment="center"
      ></Label>
    </GridLayout>
  </GridLayout>
</template>


<style scoped>
.fa {
  color: #000;
}
</style>