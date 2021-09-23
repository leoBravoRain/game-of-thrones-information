<template>
  <div id="nav">
    <va-button @click="this.$router.push({'name':'Home'})">
      <va-icon name="home" class="mr-1"/>
      Casas
      <!-- <router-link to="/">Casas</router-link>  -->
      
      <!-- <va-icon class="material-icons" style="margin:50">home</va-icon> -->
      <!-- Casas -->
    </va-button>
    <!-- | -->
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* #nav a.router-link-exact-active {
  color: white;
} */
</style>
