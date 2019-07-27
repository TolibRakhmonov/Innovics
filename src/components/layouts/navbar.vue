<template>
  <div>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="(menu,index) in menus" :key="index" :to="{name:menu.route}">{{menu.name}}</v-btn>
        <v-btn text @click="$store.dispatch('getInfo')">Userinfo</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  watch: {
    '$route': {
      handler: "checkLogin",
      immediate: true
    }
  },
  data() {
    return {
      menus: [
        { name: "Home", route: "home" },
        { name: "Sign Up", route: "signup" },
        { name: "Login", route: "login" }
      ]
    };
  },
  methods: {
    checkLogin() {
      if (window.isSignedIn) {
        let authMenu = [
          {
            name: "Logout",
            route: "Logout"
          }
        ];
        this.menus = authMenu;
      }
    }
  }
};
</script>

<style>
</style>
