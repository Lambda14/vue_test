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
      text: {}
      
     }
  },
  methods: { 
  },
  mounted () {
    let error = this.$store.getters.getErrors
    this.text = `${error.text}\nКод ошибки: \n${error.response.error_class}: ${error.response.error_text}`
  }

}

</script>