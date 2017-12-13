<template>
  <div id="video-content-warning-list" v-if="showWarning">
    <div class="content-warning-inner">
      <h2>content warning</h2>
      <p>hey, this video contains the following:</p>
      <span class="content-warning" v-bind:key="contentWarning" v-for="contentWarning in contentWarnings">{{ contentWarning }}</span>
      <div class="content-warning-button">
        <a v-on:click="showWarning = !showWarning">click to continue</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-content-warning-wrapper',
  props: ['contentWarnings'],
  data () {
    return {
      showWarning: true
    }
  }
}
</script>
