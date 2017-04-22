<template>
  <div class="videos" v-if="videos.length > 0">
    <paginate class="video-list" name="videos" :list="videos" :per="1">
      <li v-for="video in paginated('videos')">
        <app-video class="video-list" v-for="video in paginated('videos')" :key="video-id"
          v-bind:id="video.id"
          v-bind:title="video.title"
          v-bind:description="video.description"
          v-bind:tags="video.tags"
          v-bind:contentWarnings="video.contentWarnings"></app-video>
      </li>
    </paginate>
    <paginate-links for="videos" :simple="{ prev: '« previous', next: 'next »' }"></paginate-links>
  </div>
</template>

<script>
import Video from './video.vue'

export default {
  name: 'videos',
  data: () => ({ videos: {} }),
  fetch: {
    videos () {
      return 'https://tilde.town/~resir014/tildetv/api/videos.json'
    }
  },
  components: {
    'app-video': Video
  }
}
</script>
