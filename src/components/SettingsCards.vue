<template>
    <div>
        <v-card 
            class="mt-5"
            elevation="10"
            outlined
            > 
            <v-card-title>Конфигурация локального сервера</v-card-title>
            <v-card-text>
                <v-text-field outlined label="Порт" v-model="config['local_server']['port']" hint="Изменения применятся только после ручного перезапуска сервера!" :readonly="feature"></v-text-field>
            </v-card-text>
        </v-card>

        <v-card 
            class="mt-5"
            elevation="10"
            outlined
            > 
            <v-card-title>Конфигурация RK7_MID сервера</v-card-title>
            <v-card-text>
                <v-text-field outlined label="IP адрес" v-model="config['mid_server']['host']" :readonly="feature"></v-text-field>
                <v-text-field outlined label="Порт" v-model="config['mid_server']['port']" :readonly="feature"></v-text-field>
                <v-text-field outlined label="Имя администратора" v-model="config['mid_server']['user']" :readonly="feature"></v-text-field>
                <v-text-field outlined label="Пароль администратора" v-model="config['mid_server']['password']" :readonly="feature"></v-text-field>
            </v-card-text>
        </v-card>

        <v-card 
            class="mt-5"
            elevation="10"
            outlined
            > 
            <v-card-title>Конфигурация логирования</v-card-title>
            <v-card-text>
                <v-text-field outlined label="Уровень логирования" v-model="config['log']['level']" :readonly="feature"></v-text-field>
                <v-text-field outlined label="Сколько дней хранить логи" v-model="config['log']['retention_days']" :readonly="feature"></v-text-field>
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
        props: ['config', 'feature']
    }
</script>s

<style>
    .v-messages__message {
        color: orange;
    }
</style>