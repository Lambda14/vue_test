<template>
    <div>
        <v-card 
            class="mt-5"
            elevation="10"
            outlined
            > 
            <v-card-title>Заказ: {{ order_details['table']['name'] }}</v-card-title>
            <v-card-text>
               Неоплаченная сумма заказа: {{ order_details['unpaid_sum'] }}
            </v-card-text>
        </v-card>         
    </div>

</template>

<script>
    export default {
        data() {
            return {
         
            }
        },
        props: ['order_details']
    }
</script>

<style>

</style>