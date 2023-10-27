<sript setup lang="ts"></sript>

<template lang="pug">
VFooter(class="bg-[url(/images/footer-bg.jpg)]! bg-#01B763 d-flex flex-column h-fit! ma-0 pa-0 text-white")
  VContainer
    VRow(class="py-100px!")
      VCol(cols="12" md="3" class="pr-md-4")
        VImg(src="/images/logo-light.png" width="150" class="mb-20px")
        p(class="font-300 text-15px")
          | Growing Together: Planting the Seeds of Prosperity. Join LimaHub, where innovation meets agriculture. Invest in the future of farming and reap the rewards. Let's cultivate change together.

      VCol(cols="12" md="2" class="leading-26px")
        h4(class="mb-10px")
          | Company

        p(class="footer-link") Shop
        p(class="footer-link") About
        p(class="footer-link") Projects
        p(class="footer-link") Products
        p(class="footer-link") Resources

      VCol(cols="12" md="3")
        h4(class="mb-10px")
          | Contact
        p(class="mb-15px footer-text")
          | 962 Fifth Avenue, 3rd Floor Nairobi, NRB10022
        p(class="footer-text") info@limahub.com
        p(class="footer-text") (+254) 101 878 200

      VCol(cols="12" md="4")
        h4(class="mb-10px")
          | Newsletter Subsription
        p(class="mb-15px footer-text")
          | Get fresh updates, exclusive farming tips, and exciting deals delivered straight to your inbox.

        VTextField(variant="outlined" density="comfortable" rounded="0" placeholder="Email Address")
          template(v-slot:append-inner)
            VBtn(rounded="0" color="brand-light" flat) Subscribe
  VDivider(class="w-full!" color="white")

  VContainer(class="text-center")
    VResponsive(width="500" class="mx-auto")
      p(class="text-xs text-white") &copy; {{ new Date().getFullYear() }} Lima Hub Labs

</template>
