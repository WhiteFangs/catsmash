<script lang="ts">
import type { Cat } from '@/interfaces/cats';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    cat: {
      type: Object as PropType<Cat>,
      required: true
    },
    label: {
      type: String,
      default: 'top'
    }
  }
});
</script>

<template>
  <div class="image">
    <img :src="cat.url">
    <div class="score" :class="label">
      <div class="label">
        Score: {{ cat.score }} pts
      </div>
    </div>
  </div>
</template>

<style>
.image {
  width: 100%;
  position: relative;
}

.image img {
  width: inherit;
}

.score {
  position: absolute;
  width: 100%;
  text-align: center;
}

.score.top {
  top: 0;
}

.score.center {
  top: 50%;
}

.label {
  margin: auto;
  background: rgba(255, 255, 255, .5);
}
</style>
