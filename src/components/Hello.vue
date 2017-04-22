<template>
  <div class="hello">
    <h2>sit back and relax</h2>
    <ul>
      <li>
        <router-link :to="{ name: 'Videos'}">this week's playlist</router-link>
      </li>
      <li>
        <router-link to="/videos-by-tag">search by tag</router-link>
      </li>
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
