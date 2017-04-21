<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
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

a {
  color: #42b983;
  text-decoration: none;
}
a:hover,
a:focus {
  text-decoration: underline;
}
a strong {
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  margin: 0 0 1rem;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-weight: 400;
  line-height: 1.25;
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 2rem;
}

h2 {
  margin-top: 1rem;
  font-size: 1.5rem;
}

h3 {
  margin-top: 1.5rem;
  font-size: 1.25rem;
}

h4, h5, h6 {
  margin-top: 1rem;
  font-size: 1rem;
}

p {
  margin: 0 0 1rem;
}

#app {
  text-align: center;
  color: #eee;
  padding: 1em 0;
}

.container {
  max-width: 48em;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/**
 * Pagination container
 */

.paginate-links {
  list-style-type: none;
  padding: 0;
}
.paginate-links > li {
  display: inline-block;
  margin: 0 1rem;
}
.paginate-links .disabled {
  display: none;
}
</style>
