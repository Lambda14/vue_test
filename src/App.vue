<template>
  <v-main>
    <v-app> 
      <div v-if="this.$store.getters.errors">
        <ErrorTitle :text="this.$store.getters.errors"></ErrorTitle>
      </div>
      <div v-if="loading">
        <Loading :text="'Проверка лицензии...'"></Loading>
      </div>
      <div v-else>
        <component :is="layout" />
      </div>

    </v-app>
  </v-main>
  
</template>

<script>
import ErrorTitle from './components/ErrorTitle.vue';
import Loading from './components/Loading.vue';
// import LoadingLayout from './layouts/LoadingLayout.vue';
import MainLayout from './layouts/MainLayout.vue';
import NoLicenseLayout from './layouts/NoLicenseLayout.vue';

export default {
  name: 'App',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async fetchLicense () {
      this.loading = true
      await this.$store.dispatch('fetchLicenseInfo')
      this.loading = false
    },
  },
  computed: {
    layout () {
      if (this.loading) { return 'LoadingLayout' }
      return this.$store.getters.license.valid ?  'MainLayout' : 'NoLicenseLayout'
    },
  },
  async mounted() {
    await this.fetchLicense()
  },
  components: {   
    MainLayout,
    NoLicenseLayout,
    // LoadingLayout,
    Loading,
    ErrorTitle
  }
};
</script>