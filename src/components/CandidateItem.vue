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
  <div class="candidate">
    <img :src="cat.url" :alt="`ID : ${cat.id}`" :title="`ID : ${cat.id}`">
  </div>
</template>

<style scoped>
.candidate img {
  max-height: 40vh;
}
</style>
