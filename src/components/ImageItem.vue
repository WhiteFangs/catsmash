<script lang="ts">
import type { Cat } from '@/interfaces/cats';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    cat: {
      type: Object as PropType<Cat>,
      required: true
    }
  }
});
</script>

<template>
  <div class="image">
    <img :src="cat.url">
  </div>
</template>

<style>
.image {
  width: 100%;
}

.image img {
  width: inherit;
}
</style>
