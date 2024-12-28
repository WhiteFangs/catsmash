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
  <img :src="cat.url">
</template>
