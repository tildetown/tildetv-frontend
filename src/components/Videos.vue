<template>
  <div class="videos">
    <h2>this week's playlist</h2>
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
  data () {
    return {
      videos: [
        {
          id: 'JwMfT2cZGHg',
          title: 'What if Barry Bonds had played without a baseball bat? | Chart Party',
          description: 'A must watch even if you don\'t like sports. Jon Bois from SB Nation uses some neat statistics to figure out if baseballer Barry Bonds would still do well, even without carrying a bat.',
          tags: ['sports', 'statistics']
        },
        {
          id: 'sdkxWqsk17c',
          title: 'On The Turing Completeness of PowerPoint (SIGBOVIK)',
          description: 'A parody talk researching the turing-completeness of PowerPoint.',
          tags: ['technology', 'powerpoint', 'parody']
        },
        {
          id: 'thnXzUFJnfQ',
          title: 'Amiga music: Captain - Space Debris',
          description: '',
          tags: ['music'],
          contentWarnings: []
        },
        {
          id: 'abQCqIbBBeM',
          title: 'Internet Voting? Really? | Andrew Appel | TEDxPrincetonU',
          description: '',
          tags: ['computers', 'technology', 'politics'],
          contentWarnings: []
        }
      ],
      paginate: ['videos']
    }
  },
  components: {
    'app-video': Video
  }
}
</script>

<style scoped>
.video-list {
  margin-top: 0;
  margin-bottom: 3rem;
  padding: 0;
  list-style-type: none;
}
.video-list li {
  margin-bottom: 3rem;
}
</style>
