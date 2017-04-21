<template>
  <div class="video-tag-list">
    <strong>Tags:</strong>
    <span class="tag" v-for="tag in tags"><router-link :to="{ name: 'Videos By Tag', params: { tag }}">{{ tag }}</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'video-tag-list',
  props: ['tags']
}
</script>

<style scoped>
.tag {
  margin-right: .5rem;
  padding: .125rem .25rem;
  font-size: 85%;
  background-color: #333;
}

.tag:last-child {
  margin-right: 0;
}
</style>
