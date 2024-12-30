<script lang="ts">
import { defineComponent } from 'vue';
import { useCatsStore } from './stores/catsStore';
import { mapState } from 'pinia';

export default defineComponent({
  name: 'App',
  computed: {
    ...mapState(useCatsStore, ['isLoaded', 'totalMatches'])
  },
  mounted() {
    const store = useCatsStore();
    store.fetchCats();
  }
});
</script>

<template>
  <header>
    Catsmash
  </header>
  <RouterView v-if="isLoaded" />

  <div class="fixed bottom">
    <nav>
      <div class="icon">
        <img src="./assets/icons/chevron-top.svg" />
      </div>
      <RouterLink v-if="$route.name === 'leaderboard'" to="/">Revenir au vote</RouterLink>
      <RouterLink v-if="$route.name === 'home'" to="/leaderboard">Voir le classement des chats</RouterLink>
      <div class="matches">
        {{ totalMatches }} matchs joués
      </div>
    </nav>
  </div>
</template>

<style scoped>
header {
  text-align: center;
  font-size: 5em;
  font-style: italic;
  font-weight: bold;
  margin: .25em 0 1em;
}

.fixed {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
}

.bottom {
  bottom: 0;
}

nav {
  width: 300px;
  text-align: center;
  background: white;
  border: .3em solid black;
  border-bottom: none;
  border-radius: 1em 1em 0 0;
  padding-bottom: 1em;
}

nav .icon img {
  height: 2em;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.matches {
  margin-top: 1em;
}
</style>
