<script lang="ts">
import type { Cat } from '@/interfaces/cats';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  props: {
    cat: {
      type: Object as PropType<Cat>,
      required: true
    },
    rank: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      default: 'bottom'
    }
  }
});
</script>

<template>
  <div class="image">
    <img :src="cat.url" :alt="`Rang : #${rank} - Score : ${cat.score} points`"
      :title="`Rang : #${rank} - Score : ${cat.score} points`">
    <div class="label-container" :class="label">
      <div class="label rank">
        #{{ rank }}
      </div>
      <div class="label score">
        Score : {{ cat.score }} pts
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  position: relative;
}

.image img {
  width: inherit;
}

.label-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.label-container.bottom {
  bottom: 0;
}

.label-container.center {
  top: 50%;
}

.label {
  background: white;
  padding: .3em;
  border-radius: .3em;
  margin-top: .3em;
}

.label.rank {
  border-radius: 100%;
  font-size: 1.5em;
}
</style>
