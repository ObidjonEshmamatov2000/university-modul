<template>
  <v-app>
    <TopNav />
    <v-main>
      
      <router-view></router-view>
      <Login />
    </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/managerRelated/TopNav';
import Login from './views/Login.vue'

export default {
  name: 'App',

  components: {
    TopNav,
    Login
  },

  data: () => ({
    //
  }),
};
</script>
