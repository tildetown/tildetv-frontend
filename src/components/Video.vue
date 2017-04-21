<template>
  <div class="video">
    <div class="video-wrapper">
      <iframe width="1280" height="720" :src="id | embedLink" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="metadata">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
      <strong>Tags:</strong> <span class="tags" v-for="tag in tags">{{ tag }}, </span>
    </div>
    <div class="links">
      <a href="#" class="previous">&larr; Previous</a>
      <router-link to="/">Home</router-link>
      <a href="#" class="next">Next &rarr;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      id: 'JwMfT2cZGHg',
      title: 'What if Barry Bonds had played without a baseball bat? | Chart Party',
      description: 'A must watch even if you don\'t like sports. Jon Bois from SB Nation uses some neat statistics to figure out if baseballer Barry Bonds would still do well, even without carrying a bat.',
      tags: ['sports', 'statistics']
    }
  },
  filters: {
    embedLink: function (value) {
      if (!value) return ''

      value = value.toString()
      return 'https://www.youtube.com/embed/' + value
    }
  }
}
</script>

<style scoped>
.metadata {
  margin-bottom: 2rem;
}
</style>
