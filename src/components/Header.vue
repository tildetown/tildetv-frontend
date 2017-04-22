<template>
  <header>
    <h1 class="title"><router-link to="/">tilde<strong>tv</strong><small>(beta)</small></router-link></h1>
    <span class="subheading">sit back and relax</span>
    <nav>
      <ul>
        <li><router-link to="/videos">this week's playlist</router-link></li>
        <li><router-link to="/howto">add videos</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>
