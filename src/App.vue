<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" class="nav-background">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/" class="my-link">Personajes</router-link>|
            <router-link v-if="!loggedIn" to="/login" class="my-link">Iniciar Sesión</router-link>|
            <router-link v-if="!loggedIn" to="/signup" class="my-link">Registrarse</router-link>|
            <router-link v-if="loggedIn" to="/logout" class="my-link">Cerrar Sesión</router-link>|
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style>
body {
  background-color: bisque;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.nav-background {
  background-color: #2c3e50;
}
.my-link {
  color: white !important;
  padding-left: 1rem;
}
</style>
