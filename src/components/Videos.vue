<template>
  <div id="videos">
    <p v-if="!fetched">fetching videos...</p>
    <div v-if="videos && videos.length">
      <paginate class="video-list" name="videos" :list="videos" :per="1">
        <li v-for="video in paginated('videos')">
          <app-video
            v-bind:id="video.id"
            v-bind:youtubelink="video.youtubelink"
            v-bind:title="video.title"
            v-bind:addedtime="video.addedtime"
            v-bind:description="video.description"
            v-bind:user="video.user"
            v-bind:tags="video.tags"
            v-bind:contentWarnings="video.contentWarnings"></app-video>
        </li>
      </paginate>
      <paginate-links for="videos"
        :simple="{ prev: '« previous', next: 'next »' }"></paginate-links>
    </div>
    <div v-else-if="errors && errors.length">
      <p v-for="error of errors">{{error.message}}</p>
    </div>
    <div v-else-if="fetched">
      <p>No videos posted in the past week.</p>
      <p><router-link to="/howto" exact>Add some videos!</router-link></p>
    </div>
  </div>
</template>

<script>
import Video from './video.vue'
import axios from 'axios'

export default {
  name: 'videos',
  data: () => ({
    fetched: false,
    videos: [],
    errors: [],
    paginate: ['videos']
  }),
  created () {
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'static/sample-api'
      : '/~karlen/tv'

    const api = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })

    api.get('/videos.json').then(response => {
      this.fetched = true
      this.videos = response.data
    }).catch(e => {
      this.fetched = true
      this.errors.push(e)
    })
  },
  components: {
    'app-video': Video
  }
}
</script>
