<template>
  <div class="video">
    <div class="video-wrapper">
      <iframe width="1280" height="720" :src="id | embedLink" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="metadata">
      <h4>{{ title }}</h4>
      <p v-if="description">{{ description }}</p>

      <video-tag-list v-if="tags.length > 0" v-bind:tags="tags"></video-tag-list>
    </div>
    <div class="links">
      <a href="#" class="previous">&larr; Previous</a>
      <router-link to="/">Home</router-link>
      <a href="#" class="next">Next &rarr;</a>
    </div>
  </div>
</template>

<script>
import VideoTagList from './VideoTagList.vue'

export default {
  name: 'video',
  data () {
    return {
      id: this.$route.params.id,
      title: this.$route.params.title,
      description: this.$route.params.description,
      tags: this.$route.params.tags
    }
  },
  filters: {
    embedLink: function (value) {
      if (!value) return ''

      value = value.toString()
      return 'https://www.youtube.com/embed/' + value
    }
  },
  components: {
    'video-tag-list': VideoTagList
  }
}
</script>

<style scoped>
h4, h5, h6 {
  font-weight: 600;
}

.metadata {
  margin-bottom: 2rem;
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
