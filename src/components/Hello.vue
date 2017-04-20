<template>
  <div class="hello">
    <h2>sit back and relax</h2>
    <ul>
      <li><router-link to="/videos">this week's playlist</router-link></li>
      <li><router-link to="/videos-by-tag">search by tag</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
