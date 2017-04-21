<template>
  <header>
    <h1 class="title">tilde<strong>tv</strong></h1>
    <span class="subheading">sit back and relax</span>
    <nav>
      <ul>
        <li><router-link to="/videos">this week's playlist</router-link></li>
        <li><router-link to="/about">about tildetv</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
header {
  margin-bottom: 3rem;
}

.title {
  margin-bottom: 0;
  font-weight: 400;
  font-size: 2.5rem;
}

.subheading {
  font-size: 1.25rem;
}

nav {
  margin: 1.5rem 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1rem;
}
</style>
