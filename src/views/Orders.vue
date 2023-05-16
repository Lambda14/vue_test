<template>
    <div>
        <div v-if="loading">
            <Loading :text="'Загружаем заказы...'"></Loading>
        </div>
        <div v-else>
          <v-row
            justify="start"
          >
            <div v-for="(order, index) in order_list" :key="index">
                <OrderCard :order_details=order></OrderCard>
            </div>
          </v-row>
        </div>
    </div>
  </template>
  
<script>
import Loading from '../components/Loading.vue'
import OrderCard from '../components/OrderCard.vue'

export default {
  data() {
    return {
      loading: false,
            order_list: {}

          }
        },
        methods: {
        async getOrders() {
            this.loading = true
            this.order_list = await this.$store.dispatch('provideRequest', {endpoint: '/order_list'})
            this.loading = false
          }
        },
        async mounted() {
          await this.getOrders()
        },
        components: {
          OrderCard,
          Loading,
      }
  }
</script>
  