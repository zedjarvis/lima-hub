<script lang="ts" setup>
// seo
useHead({
  title: 'Contact',
})

// router
definePage({
  name: 'ContactPage',
  meta: {
    layout: 'landingpage',
    requiresAuth: false,
  }
})
</script>

<template lang="pug">
h1 This is the contact us page
</template>

<style lang="scss" scoped></style>
