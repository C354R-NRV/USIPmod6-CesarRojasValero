<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    | <router-link to="/basic"> Componente Básico </router-link>
    | <router-link to="/props"> Props </router-link>
    | <router-link to="/emit"> Emitir Eventos </router-link>
    | <router-link to="/slot"> Slots </router-link>
    | <router-link to="/bind-sync"> v-bind.sync </router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
