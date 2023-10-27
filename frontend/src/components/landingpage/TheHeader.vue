<script setup lang="ts">

const drawer = ref(false)
</script>

<template lang="pug">
VAppBar(flat scroll-behavior="elevate hide" class="px-md-16 border-b")
  VAppBarTitle
    VImg(src="/images/logo-green.png" width="130")

  VSpacer

  VBtn(variant="plain" :ripple="false" class="d-none d-md-flex") Home
  VBtn(variant="plain" :ripple="false" class="d-none d-md-flex") About
  VBtn(variant="plain" :ripple="false" class="d-none d-md-flex") Projects
  VBtn(variant="plain" :ripple="false" class="d-none d-md-flex") Resources
  VBtn(variant="plain" :ripple="false" class="d-none d-md-flex")
    | Shop
    VBadge(content="2" color="brand-dark")
      VIcon(icon="mdi-shopping-outline")

  VSpacer

  VBtn(rounded="0" class="text-capitalize mx-3 d-none d-md-flex") Log In
  VBtn(rounded="0" class="text-capitalize d-none d-md-flex" variant="flat" color="brand-dark")
    | Invest Now
  VAppBarNavIcon(@click="drawer = !drawer" class="d-flex d-md-none")

VNavigationDrawer(v-model="drawer" temporary location="top" class="h-max!")
  VList(class="px-5 pb-10 space-y-4!")
    VListItem(title="Home")
    VListItem(title="About")
    VListItem(title="Projects")
    VListItem(title="Resources")
    VListItem(title="Shop")
      template(v-slot:append)
        VBadge(content="2" color="brand-light")
          VIcon(icon="mdi-shopping-outline")
    VBtn(variant="outlined" color="brand-dark" rounded="0" block) Log In
    VBtn(variant="flat" color="brand-dark" rounded="0" block) Invest Now
</template>
