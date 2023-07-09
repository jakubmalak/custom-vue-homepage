<template>
  <router-link :to="endpoint">
    <v-btn
      density="comfortable"
      color="white"
      border="none"
      max-width="120"
      style="background-color: #80CBC4"
    >{{ text }}
    </v-btn>
  </router-link>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  text: String,
  endpoint: String
});

</script>

<style scoped>

</style>
