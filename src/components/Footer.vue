<template>
  <footer>
    <small>
      designed by <a href="https://tilde.town/~resir014">~resir014</a>. backend work by <a href="https://tilde.town/~karlen">~karlen</a>.
    </small>
    <small>
      <router-link to="/">back to home</router-link>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped>
footer {
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid #222;
}

small {
  display: block;
  margin: .5rem 0;
}
</style>
