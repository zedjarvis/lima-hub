<script lang="ts" setup>
// seo
useHead({
  title: 'About',
})

// router
definePage({
  name: 'AboutPage',
  meta: {
    layout: 'landingpage',
    requiresAuth: false,
  }
})
</script>

<template lang="pug">
h1 This is the about page
</template>

<style lang="scss" scoped></style>
