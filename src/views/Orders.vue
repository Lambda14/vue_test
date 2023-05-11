<template>
    <div>
        <div v-if="loading">
            <LoadingLayout></LoadingLayout>
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
import OrderCard from '../components/OrderCard.vue'
import LoadingLayout from '../layouts/LoadingLayout.vue'


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
            r = await r.json()
            this.order_list = r
            this.loading = false 
        }
      },
      async mounted() {
        await this.getOrders()
      },
      components: {
        OrderCard,
        LoadingLayout
      }
  }
</script>
  