<template>
    <div>
    <AppNavBar></AppNavBar>
    <v-container fluid>
        <router-view />
    </v-container>
    </div>
</template>

<script>
import AppNavBar from '../components/AppNavBar.vue';


export default {
    data () {
        return {}
    },
    components: {
        AppNavBar,
        
        }
    }
</script>