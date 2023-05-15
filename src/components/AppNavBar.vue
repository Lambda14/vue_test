<template>
  <v-container>
      <v-app-bar app color="cyan accent-4" dark dense >
        <v-toolbar-title>RK Orders</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon @click="$router.push('/')"> <v-icon> mdi-home </v-icon> </v-btn> -->
        <v-btn icon @click="$router.push('orders')"> <v-icon> mdi-list-box-outline</v-icon> </v-btn>
        <v-btn icon @click="$router.push('settings')"> <v-icon> mdi-cog </v-icon> </v-btn>
      </v-app-bar>
    </v-container>
  </template>

<script>
    export default {
    name: 'AppNavBar',
    data() {
        return {
        
        }
    }


    };
</script>