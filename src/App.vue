<template>
  <div id="app">
    <div class="container">
      <h1 class="title">tilde<strong>tv</strong></h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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

.title {
  font-weight: 400;
}

/**
 * Video wrapper.
 *
 * @see https://alistapart.com/article/creating-intrinsic-ratios-for-video
 */

.video-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  margin-top: 1rem;
  margin-bottom: 1rem
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%
}
</style>
