<template>
  <v-container>
    <v-row>
      <PageLinkCard v-for="(card, index) in cards" :key="index" :title="card.title" :imageUrl="card.imageUrl"/>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-4">
          <v-card-title>
            Add New Card
          </v-card-title>
          <v-form @submit.prevent="addNewCard">
            <v-text-field v-model="newCard.title" label="Title"></v-text-field>
            <v-text-field v-model="newCard.imageUrl" label="Image URL"></v-text-field>
            <v-btn type="submit" color="primary">Add</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-card class="pa-4">
    <v-btn color="error" @click="clearLocalStorage">Clear Local Storage</v-btn>
  </v-card>
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
