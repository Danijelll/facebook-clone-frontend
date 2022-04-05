<template>
<Nav />
  <router-view/>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components:{
    Nav
  },
name:'App'
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Open Sans, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
