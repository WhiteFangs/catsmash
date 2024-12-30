<script lang="ts">
import { mapActions } from 'pinia'
import { useCatsStore } from '../stores/catsStore'
import { defineComponent } from 'vue';
import type { Cat } from '@/interfaces/cats';
import CandidateItem from '@/components/CandidateItem.vue';

export default defineComponent({
  components: {
    CandidateItem
  },
  data: () => ({
    cats: [] as Cat[]
  }),
  methods: {
    ...mapActions(useCatsStore, ['getTwoRandomCats']),
    vote(cat: Cat) {
      cat.score++;
      this.cats = this.getTwoRandomCats();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.cats = this.getTwoRandomCats();
    })
  }
})
</script>

<template>
  <div class="facing" v-if="cats.length > 0">
    <div class="candidate-container">
      <CandidateItem :cat="cats[0]" @vote="vote(cats[1])" />
    </div>
    <div class="candidate-container">
      <CandidateItem :cat="cats[1]" @vote="vote(cats[1])" />
    </div>
  </div>
</template>

<style>
.facing {
  display: flex;
}

.candidate-container {
  flex: 1;
  text-align: center;
}

.candidate-container:first-child {
  border-right: .3em dashed black;
}
</style>
