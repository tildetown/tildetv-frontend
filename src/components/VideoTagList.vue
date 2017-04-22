<template>
  <div class="video-tag-list">
    <span class="tag" v-for="tag in tags"><router-link :to="{ name: 'Videos By Tag', params: { tag }}">{{ tag }}</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'video-tag-list',
  props: ['tags']
}
</script>
