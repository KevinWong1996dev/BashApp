<template>
  <GridLayout row="0" rows="*, 2*, *">
    <GridLayout
      width="57%"
      row="0"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Label
        class="lobster-regular carousel-item-head"
        text="Welcome to Payments App"
        textWrap="true"
      ></Label>
    </GridLayout>
    <GridLayout
      class="carousel-item-circle"
      row="1"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Label
        class="fa carousel-item-icon"
        text="&#xf19c;"
        textWrap="true"
      ></Label>
    </GridLayout>
    <GridLayout
      width="49%"
      row="2"
      horizontalAlignment="center"
      verticalAlignment="center"
    >
      <Label
        class="opensans-regular carousel-item-desc"
        text="Let's see a quick overview of our features."
        textWrap="true"
      ></Label>
    </GridLayout>
  </GridLayout>
</template>
