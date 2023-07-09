<template>
  <v-app>
    <v-main>
      <Navigation></Navigation>
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {ref, computed, onMounted} from 'vue';
import PageLinkCard from '@/components/PageLinkCard.vue';
import {useCardStore} from "@/store/CardStore";
import {Card} from "@/model/Card";
import Navigation from '@/components/Navigation.vue'

const newCard = ref({title: '', imageUrl: ''});

const cardStore = useCardStore();
const cards = computed(() => cardStore.getCards);


function addNewCard() {
  const {title, imageUrl} = newCard.value;
  if (title && imageUrl) {
    cardStore.addCard({title, imageUrl});
    newCard.value.title = '';
    newCard.value.imageUrl = '';
  }
}

function clearLocalStorage() {
  cardStore.clearLocalStorage()
}

onMounted(() => {
  cardStore.loadStateFromLocalStorage()

})

</script>

<style scoped>
</style>
