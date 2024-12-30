<script lang="ts">
import type { Cat } from '@/interfaces/cats';
import { defineComponent, type PropType } from 'vue';
import ButtonItem from './ButtonItem.vue';

export default defineComponent({
  emits: ['vote'],
  components: {
    ButtonItem
  },
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
    <div>
      <img :src="cat.url" :alt="`ID : ${cat.id}`" :title="`ID : ${cat.id}`" @click="$emit('vote')">
    </div>
    <div>
      <ButtonItem label="J'aime" @click="$emit('vote')" />
    </div>
  </div>
</template>

<style scoped>
.candidate {
  display: flex;
  flex-direction: column;
}

.candidate img {
  max-height: 40vh;
  border-radius: 1em;
  cursor: pointer;
}
</style>
