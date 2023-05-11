<template>

        <v-card 
            class="mt-5 ml-5"
            elevation="5"
            width="300"
            
            outlined
            > 
            <v-card-title>Заказ: {{ order_details['table']['name'] }}</v-card-title>
            <v-card-text>
               Неоплаченная сумма заказа: {{ order_details['unpaid_sum'] }} руб.
            </v-card-text>
        </v-card>         


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