<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['click'],
  props: {
    label: {
      type: String,
      required: true
    },
  },
});
</script>

<template>
  <button class="button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  border: .3em black solid;
  border-radius: .3em;
  background: black;
  color: white;
  cursor: pointer;
  padding: .3em .5em;
}

.button:hover {
  color: black;
  background: white;
}
</style>
