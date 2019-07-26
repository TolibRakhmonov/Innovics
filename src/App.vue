<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
export default {
  components:{
    Home: () => import('./views/Home')
  }
};
</script>
