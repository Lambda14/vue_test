<template>
    <!-- <v-container fluid> -->
        <v-row
            align="center"
            justify="center"
        >
            <v-card 
            elevation="10"
            outlined
            > 
            <v-card-title>Отсутствует лицензия</v-card-title>
            <v-card-text>
                <div>Работоспособность ПО ограничена в виду отсутствия действующей лицензии.</div>
                <div>Дата окончания: {{ this.$store.getters.getLicense.expire_date  }}</div>
            </v-card-text>
        </v-card>
        </v-row>
    <!-- </v-container> -->
</template>