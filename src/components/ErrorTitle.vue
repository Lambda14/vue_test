<template>
  <v-alert
    prominent
    type="error"
  >
    <v-row align="center">
      <v-col class="grow">
        {{ text }}
      </v-col>
      <v-col class="shrink">
        <v-btn @click="$store.dispatch('clearErrors')">Закрыть</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  data () {
     return {
      
     }
  },
  methods: { 
  },
  mounted () {

  },
  props: ['text']

}

</script>