<template>
  <div class="news">
      news
  </div>
</template>

<script>
export default {
  name: 'News',
  mounted() {
    this.$store.dispatch('getNewsData')
  }
}
</script>

<style>

</style>