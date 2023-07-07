<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card class="pa-4">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-img
        :src="imageUrl"
        height="200px"
        cover
      ></v-img>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  imageUrl: String,
});
</script>

<style scoped>
</style>
