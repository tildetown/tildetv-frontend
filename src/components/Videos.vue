<template>
  <div class="videos">
    <p v-if="videos.pending">fetching videos...</p>
    <div v-if="videos.fulfilled">
      <paginate class="video-list" name="videos" :list="videos.value" :per="1">
        <li v-for="video in paginated('videos')">
          <app-video
            v-bind:id="video.id"
            v-bind:title="video.title"
            v-bind:description="video.description"
            v-bind:user="video.user"
            v-bind:tags="video.tags"
            v-bind:contentWarnings="video.contentWarnings"></app-video>
        </li>
      </paginate>
      <paginate-links for="videos"
        :simple="{ prev: '« previous', next: 'next »' }"></paginate-links>
    </div>
    <p v-if="videos.rejected">{{ videos.reason.message }}</p>
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
      return 'static/sample-api/videos.json'
    }
  },
  components: {
    'app-video': Video
  }
}
</script>
