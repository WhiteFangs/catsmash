<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<template>
  <header>
    Catsmash
  </header>
  <RouterView />

  <div class="fixed bottom">
    <nav>
      <div class="icon">
        <img src="./assets/icons/chevron-top.svg" />
      </div>
      <RouterLink v-if="$route.name === 'leaderboard'" to="/">Revenir au vote</RouterLink>
      <RouterLink v-if="$route.name === 'home'" to="/leaderboard">Voir le classement des chats</RouterLink>
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
</style>
