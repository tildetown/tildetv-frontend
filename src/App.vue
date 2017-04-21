<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <footer>
        <router-link to="/">home</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>

<style>
html {
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #111;
  color: #eee;
  min-height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 400;
  line-height: 1.25;
  text-rendering: optimizeLegibility;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

#app {
  text-align: center;
  color: #eee;
  padding-top: 1em;
}

.container {
  max-width: 36em;
  margin-left: auto;
  margin-right: auto;
}
</style>
