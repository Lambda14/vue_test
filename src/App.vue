<template>
  <v-main>
    <v-app>
      <AppNavBar></AppNavBar>
      <v-container fluid>
          <router-view />
      </v-container>
      {{ $store.getters.getLicense }}
    </v-app>
  </v-main>
  
</template>

<script>
import AppNavBar from './components/AppNavBar.vue'

export default {
  name: 'App',
  data() {
    return {
        
    }
  },
  methods: {

  },
  computed: {

    },
  async mounted() {
        await this.$store.dispatch('getLicenseInfo')
      },
  components: { 
        AppNavBar        
      }
};
</script>