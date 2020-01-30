<template>
    <GridLayout v-if="selectedRoute == 'home' || selectedRoute == 'profile' ? true : false" row="0" borderBottomWidth="0.5" borderBottomColor="#b2b2b2">
        <GridLayout v-if="selectedRoute == 'home' ? true : false" marginTop="5" marginBottom="5" columns="10, auto, auto, *, auto, auto, 10">
            <Label col="1" text.decode="&#xf030;" class="fa android-lbl" marginright="8" verticalalignment="center" fontsize="25"></Label>
            <Image col="2" height="40" src="~/assets/images/title.png" stretch="aspectFill"></Image>
            <Image col="4" width="30" height="30" src="~/assets/images/icon.png" stretch="aspectFill" marginright="15"></Image>
            <Label col="5" text.decode="&#xf1d9;" class="fa android-lbl" verticalalignment="center" fontsize="25"></Label>
            <Label col="5" text="2" borderRadius="100%" width="20" height="20" style="background: white; border-width: 1; border-color: #2E93F0; color: #2E93F0; margin-left:15;" verticalAlignment="top" horizontalAlignment="right" textAlignment="center"></Label>
        </GridLayout>
        <GridLayout v-if="selectedRoute == 'profile' ? true : false" marginTop="5" marginBottom="5" columns="15, auto, auto, *, auto, auto, 10">
            <label col="1" text="woorkout.pt" verticalalignment="center" fontsize="20" class="android-lbl"></label>
            <Label col="2" text.decode="&#xf0d7;" class="fa android-lbl" marginleft="8" verticalalignment="center" fontsize="20"></Label>
            <Label col="4" text.decode="&#xf017;" class="fa android-lbl" verticalalignment="center" fontsize="25" marginright="15"></Label>
            <Label col="5" text.decode="&#xf0ae;" class="fa android-lbl" verticalalignment="center" fontsize="20"></Label>
            <Label col="5" text="2" borderRadius="100%" width="20" height="20" style="background: #ff4b60; color: white; margin-left:15; margin-bottom: 20;" verticalAlignment="top" horizontalAlignment="right" textAlignment="center"></Label>
        </GridLayout>
    </GridLayout>
</template>
