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
  </div>
</template>

<script>
import VideoTagList from './VideoTagList.vue'

export default {
  name: 'video',
  props: ['id', 'title', 'description', 'tags', 'contentWarnings'],
  components: {
    'video-tag-list': VideoTagList
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
