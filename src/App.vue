<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {mapMutations} from 'vuex';

export default {
  name: 'App',
  components: { Header, Footer },
  methods: {
    ...mapMutations(['checkDataBase']),
  },
  mounted() {
    this.checkDataBase();
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 100vh;
    color: #365e7d;
  }
  nav a.router-link-exact-active {
    background-color: #365e7d;
    color: #fff !important;
  }
  .btn {
    border-radius: 2em !important;
    border-color: #365e7d !important;
  }
  .btn:hover {
    color: #365e7d !important;
  }
  .show > .btn-outline-light.dropdown-toggle {
    color: #365e7d !important;
  }
  .dropdown-toggle::after {
    margin-left: 0.4em !important;
    vertical-align: middle !important;
  }
  .dropdown-menu {
    border-radius: 0.6em !important;
    border-color: #365e7d !important;
  }
  .dropdown-item {
    color: #365e7d !important;
  }
  .dropdown-item:hover {
    color: #365e7d !important;
  }
  .dropdown-item:focus, .dropdown-item:active {
    background-color: #fff !important;
    color: #365e7d !important;
  }
  .btn-secondary {
    background-color: #8ac9fe !important;
    border-color: #365e7d !important;
  }
  .btn-secondary:hover {
    background-color: #365e7d !important;
    color: #fff !important;
  }
</style>