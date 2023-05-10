<template>
    <div>
        <h1 v-if="loading">
            Загрузка данных...
        </h1>
        <div v-else>
            <SettingsCards :config="config"/>
            <!-- <v-card 
                class="mt-5"
                elevation="10"
                outlined
                v-for="(config_value, config_name, config_index) in this.config" :key="config_index"
            > 
                <v-card-title>Config {{ config_name }}</v-card-title>
                <v-card-text v-for="(value, name, index) in config_value" :key="index">
                    <v-text-field outlined :label=name v-model="config[config_name][name]"></v-text-field>
                </v-card-text>
            </v-card> -->
            <v-btn class="ma-5" color="green" @click="setConfig()">Сохранить</v-btn>
            <v-btn class="ma-5" color="red" @click="getConfig()">Сбросить</v-btn>
        </div>
    </div>

</template>

<script>
import SettingsCards from '../components/SettingsCards.vue'

    export default {
        data() {
        return {
            loading: false,
            config: {},
        }
        },
        methods: {
            async getConfig () {
                this.loading = true
                let r = await fetch('http://localhost:8888/config')
                r = await r.json()
                this.config = r
                this.loading = false      
            },
            async setConfig () {
                console.log(JSON.stringify(this.config))
                let r = await fetch('http://localhost:8888/config', { 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    method: "POST", 
                    body: JSON.stringify(this.config    )
                })
                r = await r.json()
                console.log(r)
            },
        },
        async mounted() {
            await this.getConfig()

        },
        components: {
            SettingsCards
        }
    }

</script>