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

    removeCard(title: string, imageUrl: string) {
      const index = this.$state.cards.findIndex((card) => card.title === title && card.imageUrl === imageUrl);
      if (index !== -1) {
        this.$state.cards.splice(index, 1);
        this.saveStateToLocalStorage();
      }
    },
  },
  getters: {
    getCards(): Card[] {
      return this.$state.cards;
    },
  },
});
