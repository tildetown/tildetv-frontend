<template>
  <div id="video">
    <div class="video-wrapper">
      <iframe width="1280" height="720" :src="id.v | embedLink" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="metadata">
      <h4 v-if="title">{{ title }}</h4>
      <p v-if="description">{{ description }}</p>
      <p v-if="user"><small>added by <a :href="user | userLink">~{{ user }}</a> on {{ addedtime | generateTime }}</small></p>

      <video-tag-list v-if="tags.length > 0" v-bind:tags="tags"></video-tag-list>
    </div>
  </div>
</template>

<script>
import VideoTagList from './VideoTagList.vue'

export default {
  name: 'video',
  props: ['id', 'youtubelink', 'title', 'addedtime', 'description', 'user', 'tags', 'contentWarnings'],
  components: {
    'video-tag-list': VideoTagList
  },
  filters: {
    embedLink: function (value) {
      if (!value) return ''

      value = value.toString()
      return 'https://www.youtube.com/embed/' + value
    },
    userLink: function (value) {
      if (!value) return ''

      value = value.toString()
      return 'https://tilde.town/~' + value
    },
    generateTime: function (value) {
      if (!value) return 0

      value = parseInt(value)
      return new Date(value * 1000).toISOString()
    }
  }
}
</script>
