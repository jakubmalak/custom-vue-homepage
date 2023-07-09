<template>
  <v-col cols="12">
    <v-list class="d-flex justify-center">
      <v-list-item>
        <NavigationButton text="Homepage" endpoint="/"></NavigationButton>
      </v-list-item>

      <v-list-item class="ml-auto">
        <NavigationButton text="Login" endpoint="/login"></NavigationButton>

      </v-list-item>
    </v-list>
  </v-col>
</template>

<script lang="ts" setup>
import NavigationButton from '@/components/NavigationButton.vue'
</script>

<style scoped>

</style>
