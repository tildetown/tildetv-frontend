<template>
  <div id="hello">
    <p>tildetv is an alternative way to enjoy visual media on the internet. it's a playlist of YouTube videos discovered and curated by <a href="https://tilde.town">tilde.town members</a> from a variety of different categories across the site, and are available here for everyone's viewing pleasure.</p>

    <h2>features</h2>
    <ul>
      <li>simple, intuitive <router-link to="/videos">playlist page</router-link> (with tags &amp; content warnings)</li>
      <li><router-link to="/howto">add videos to the playlist</router-link> using a simple command line</li>
      <li><a href="https://tilde.town/~karlen/tv/videos.json" target="_blank">JSON datadump</a>, for ~town members who want to develop their own, in-console viewer</li>
      <li>videos are reset every week, so you're bound to see something fresh!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>
