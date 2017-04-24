<template>
  <div id="video-content-warning-list">
    <span class="content-warning" v-for="contentWarning in contentWarnings">{{ contentWarning }}</span>
  </div>
</template>

<script>
export default {
  name: 'video-content-warning-list',
  props: ['contentWarnings']
}
</script>
