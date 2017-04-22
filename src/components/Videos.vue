<template>
  <div class="videos">
    <div v-if="videos.pending">
      <p>fetching videos...</p>
    </div>
    <div v-if="videos.fulfilled">
      <paginate class="video-list" name="videos" :list="videos.value" :per="1">
        <li v-for="video in paginated('videos')">
          <app-video
            v-bind:id="video.id"
            v-bind:title="video.title"
            v-bind:description="video.description"
            v-bind:tags="video.tags"
            v-bind:contentWarnings="video.contentWarnings"></app-video>
        </li>
      </paginate>
      <paginate-links for="videos"
        :simple="{ prev: '« previous', next: 'next »' }"></paginate-links>
    </div>
    <div v-if="videos.rejected">
      <p>{{ videos.reason.message }}</p>
    </div>
  </div>
</template>

<script>
import Video from './video.vue'

export default {
  name: 'videos',
  data: () => ({
    videos: {},
    paginate: ['videos']
  }),
  fetch: {
    videos () {
      return 'static/api/videos.json'
    }
  },
  components: {
    'app-video': Video
  }
}
</script>
