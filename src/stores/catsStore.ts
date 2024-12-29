import { defineStore } from 'pinia'
import type { Cat, Results } from '@/interfaces/cats'
import { API_URL } from '@/constants';

export const useCatsStore = defineStore('cats', {
  state: () => ({
    cats: [] as Cat[]
  }),
  actions: {
    async fetchCats() {
      if (this.cats.length > 0)
        return;
      try {
        const response = await fetch(API_URL);
        const results = await response.json() as Results;
        this.cats = results.images as Cat[];
        this.cats.forEach(c => c.score = 0);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    sortedCats(): Cat[] {
      return [...this.cats].sort((a, b) => b.score - a.score);
    },
    isLoaded(): boolean {
      return this.cats.length > 0;
    }
  }
})
