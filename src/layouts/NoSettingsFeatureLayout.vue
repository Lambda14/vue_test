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
            <v-card-title>Данная функция не доступна</v-card-title>
            <v-card-text>
                <div>Просмотр настроек ограничен, в виду отсутствия платного расширения.</div>
            </v-card-text>
            <v-btn
                @click="this.$router.push('/')"
            >Вернуться на главный экран</v-btn>
        </v-card>
        </v-row>

</template>