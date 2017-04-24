<template>
  <div id="hello">
    <p>tildetv is a new way to enjoy media on the internet. it's a curated playlist of videos added from by members of the <a href="https://tilde.town">tilde.town</a> network. each of the videos featured here are curated by tilde.town members, and are available here for everyone's viewing pleasure.</p>

    <h2>features</h2>
    <ul>
      <li>simple-lightweight playlist page</li>
      <li><router-link to="/howto">add videos to the playlist</router-link> using a simple command line</li>
      <li>videos are reset every week, so you're bound to see something fresh!</li>
      <li><a href="https://tilde.town/~karlen/tv/videos.json" target="_blank">JSON datadump</a>, for ~town members who want to develop their own, in-console viewer</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
