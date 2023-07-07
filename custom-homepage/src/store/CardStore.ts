import { defineStore } from 'pinia';

interface Card {
  title: string;
  imageUrl: string;
}

export const useCardStore = defineStore('cardStore', {
  state: (): { cards: Card[] } => ({
    cards: [],
  }),
  actions: {
    addCard(card: Card) {
      this.$state.cards.push(card);
      this.saveStateToLocalStorage();
    },
    loadStateFromLocalStorage() {
      console.log("loadStateFromLocalStorage")
      const storedState = localStorage.getItem('cardStore');
      if (storedState) {
        this.$state.cards = JSON.parse(storedState);
      }
    },

    saveStateToLocalStorage() {
      localStorage.setItem('cardStore', JSON.stringify(this.$state.cards));
    },

    clearLocalStorage() {
      localStorage.removeItem('cardStore');
      this.$state.cards = [];
    },
  },
  getters: {
    getCards(): Card[] {
      return this.$state.cards;
    },
  },
});
