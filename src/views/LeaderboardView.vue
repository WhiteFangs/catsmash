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
  <div>
    <ImageItem v-for="cat in cats" :cat="cat" :key="cat.id" />
  </div>
</template>

<style></style>
