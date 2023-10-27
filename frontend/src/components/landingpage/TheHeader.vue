<script setup lang="ts"></script>

<template lang="pug">
VAppBar(flat scroll-behavior="elevate hide" class="px-md-16")
  VAppBarTitle
    VImg(src="/images/logo-green.png" width="130")

  VSpacer

  VBtn(variant="plain" :ripple="false") Home
  VBtn(variant="plain" :ripple="false") About
  VBtn(variant="plain" :ripple="false") Projects
  VBtn(variant="plain" :ripple="false") Resources
  VBtn(variant="plain" :ripple="false")
    | Shop
    VBadge(content="2" color="brand-dark")
      VIcon(icon="mdi-shopping-outline")

  VSpacer

  VBtn(rounded="0" class="text-capitalize mx-3") Log In
  VBtn(rounded="0" class="text-capitalize" variant="flat" color="brand-dark")
    | Invest Now
  //- VIcon(icon="mdi-shopping-outline" class="position-absolute right-10")
</template>
