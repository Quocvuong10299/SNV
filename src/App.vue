<script setup>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <Header />

  <Menu />

  <main class="min-h-screen">
    <RouterView />
  </main>

  <Footer />

</template>
