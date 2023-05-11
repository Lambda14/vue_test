<template>
  <v-main>
    <v-app>
      <component :is="layout" />
    </v-app>
  </v-main>
  
</template>

<script>
import LoadingLayout from './layouts/LoadingLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import NoLicenseLayout from './layouts/NoLicenseLayout.vue';


export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {

  },
  computed: {
      layout () {
        if (Object.keys(this.$store.getters.getLicense).length == 0) { return 'LoadingLayout' }
        return this.$store.getters.getLicense.valid ?  'MainLayout' : 'NoLicenseLayout'
      }
    },
  async mounted() {
        await this.$store.dispatch('fetchLicenseInfo')
      },
  components: {   
        MainLayout,
        NoLicenseLayout,
        LoadingLayout,

      }
};
</script>