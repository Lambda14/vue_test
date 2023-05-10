<template>
    <div>
        <h1 v-if="loading">
            Загрузка данных...
        </h1>
        <div v-else>
            <div v-for="(order, index) in order_list" :key="index">
                <OrderCard :order_details=order></OrderCard>
            </div>
            {{ order_list }}
        </div>
    </div>
  </template>
  
<script>
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
            let r = await fetch('http://localhost:8888/order_list')
            r = await r.json()
            this.order_list = r
            this.loading = false 
        }
      },
      async mounted() {
        await this.getOrders()
      },
      components: {
         OrderCard
      }
  }
</script>
  