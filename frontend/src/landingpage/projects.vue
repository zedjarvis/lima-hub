<script lang="ts" setup>
// seo
useHead({
  title: 'Projects',
})

// router
definePage({
  name: 'ProjectPage',
  meta: {
    layout: 'landingpage',
    requiresAuth: false,
  }
})
</script>

<template lang="pug">
h1 This is the projects page
</template>

<style lang="scss" scoped></style>
