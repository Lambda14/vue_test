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
            let r = await fetch('/order_list')
            r = await this.$store.dispatch('fetchError', {response: r, text: 'Получение списка заказов.'})
            if (r == false) { this.loading = false; return 0 }
            this.order_list = r
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
  