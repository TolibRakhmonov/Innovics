<template>
  <v-app>
    <Navbar />
    <Footer />
  </v-app>
</template>

<script>
export default {
  components: {
    Navbar: () => import('../components/layouts/navbar.vue'),
    Footer: () => import('../components/layouts/footer.vue')
  },
};
</script>
