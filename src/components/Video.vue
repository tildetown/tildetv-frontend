<template>
  <div id="video">
    <div class="video-wrapper">
      <iframe width="1280" height="720" :src="id.v | embedLink" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="metadata">
      <h4 v-if="title">
        {{ title }}
        <a title="Click to show content warnings" class="cw-notifier"
          v-if="contentWarnings.length > 0"
          v-on:click="cwToggle = !cwToggle">CW</a>
      </h4>
      <video-content-warning-list v-if="cwToggle"
        v-bind:contentWarnings="contentWarnings"></video-content-warning-list>

      <p v-if="description">{{ description }}</p>
      <p v-if="user"><small>added by <a :href="user | userLink">~{{ user }}</a> on {{ addedtime | generateTime }}</small></p>

      <video-tag-list v-if="tags.length > 0" v-bind:tags="tags"></video-tag-list>
    </div>
  </div>
</template>

<script>
import VideoTagList from './VideoTagList.vue'
import VideoContentWarningList from './VideoContentWarningList.vue'

export default {
  name: 'video',
  props: ['id', 'youtubelink', 'title', 'addedtime', 'description', 'user', 'tags', 'contentWarnings'],
  data () {
    return {
      cwToggle: false
    }
  },
  components: {
    'video-tag-list': VideoTagList,
    'video-content-warning-list': VideoContentWarningList
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
