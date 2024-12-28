<script lang="ts">
import { mapState } from 'pinia'
import { useCatsStore } from '../stores/catsStore'
import { defineComponent } from 'vue';
import ImageItem from '@/components/ImageItem.vue';

export default defineComponent({
  components: {
    ImageItem
  },
  computed: {
    ...mapState(useCatsStore, {
      cats: 'sortedCats'
    })
  },
  mounted() {
    const store = useCatsStore();
    store.fetchCats();
  }
})
</script>

<template>
  <div v-if="cats.length > 0">
    <div class="podium">
      <div class="container">
        <ImageItem :cat="cats[1]" label="center" />
      </div>
      <div class="container">
        <ImageItem :cat="cats[0]" label="center" />
      </div>
      <div class="container">
        <ImageItem :cat="cats[2]" label="center" />
      </div>
    </div>
    <div class="grid">
      <div class="container" v-for="cat in cats.slice(3)" :key="cat.id">
        <ImageItem :cat="cat" />
      </div>
    </div>
  </div>
</template>

<style>
.grid,
.podium {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  gap: 1em;
}

.podium {
  margin-bottom: 1em;
  align-items: baseline;
}

.container {
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 1em;
}

.podium .container {
  width: calc(33.333% - 1em);
}

.podium .container:nth-child(1) {
  max-height: 300px;
}

.podium .container:nth-child(2) {
  max-height: 350px;
}

.podium .container:nth-child(3) {
  max-height: 250px;
}

.grid .container {
  width: calc(25% - 1em);
  height: 250px;
}

.grid .container .image {
  height: 250px;
}
</style>
