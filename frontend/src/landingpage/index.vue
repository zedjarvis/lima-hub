<script lang="ts" setup>
// seo
useHead({
  title: 'Home',
})

// router
definePage({
  name: 'HomePage',
  meta: {
    layout: 'landingpage',
    requiresAuth: false,
  }
})
</script>

<template lang="pug">
h1 This is the index page
</template>

<style lang="scss" scoped></style>
