<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import SignInForm from '@/components/SignInForm.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <SiteHeader />

  <section>
    <RouterView />
  </section>
</template>
