<template>
  <v-col cols="12" sm="6" md="4" lg="2">
    <v-card class="pa-4 text-center">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-img
        :src="imageUrl"
        height="200px"
        cover
      ></v-img>
      <v-btn color="error" class="mt-4" @click="removeCard">Remove</v-btn>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {useCardStore} from "@/store/CardStore";

const props = defineProps({
  title: String,
  imageUrl: String,
});

const cardStore = useCardStore();

function removeCard() {
  cardStore.removeCard(props.title, props.imageUrl);
}
</script>

<style scoped>
</style>
