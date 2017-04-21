<template>
  <div class="videos">
    <h2>this week's playlist</h2>
    <ul class="video-list">
      <li v-for="video in videos">
        <router-link :to="{ name: 'Video', params: { id: video.id }}">{{ video.title }}</router-link>
      </li>
    </ul>
    <p><router-link to="/">Home</router-link></p>
  </div>
</template>

<script>
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
          id: 'thnXzUFJnfQ',
          title: 'Amiga music: Captain - Space Debris',
          description: '',
          tags: [],
          contentWarnings: []
        },
        {
          id: 'abQCqIbBBeM',
          title: 'Internet Voting? Really? | Andrew Appel | TEDxPrincetonU',
          description: '',
          tags: ['computers', 'technology', 'politics'],
          contentWarnings: ['flashing images']
        }
      ]
    }
  }
}
</script>

<style scoped>
.video-list {
  margin-bottom: 2rem;
  text-align: left;
}
</style>
