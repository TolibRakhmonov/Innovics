<template>
  <v-app>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex text-center>
          <h1>You are logged out</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  created() {
    localStorage.removeItem("token");
    window.isSignedIn = false

    setTimeout( () => {
        this.$router.push('/login')
    }, 1200)
  }
};
</script>

<style>
</style>
