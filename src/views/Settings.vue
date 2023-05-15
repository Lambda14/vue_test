<template>
    <v-container>
        <div v-if="loading">
            <Loading :text="'Загружаем настройки...'"></Loading>
        </div>
        <div v-else>
            <div>
                <SettingsCards :config="config" :feature="!editSettingsFeature"/>
                <v-btn class="ma-5" color="green" @click="setConfig()" :disabled="!editSettingsFeature">Сохранить</v-btn>
                <v-btn class="ma-5" color="red" @click="getConfig()" :disabled="!editSettingsFeature">Сбросить</v-btn>
            </div>
            <WaitingOverlay :overlay="overlay"></WaitingOverlay>
        </div>
    </v-container>

</template>

<script>
import Loading from '../components/Loading.vue'
import WaitingOverlay from '../components/WaitingOverlay.vue'
import SettingsCards from '../components/SettingsCards.vue'



export default {
    data() {
        return {
            loading: false,
            config: {},
            showSettingsFeature: false,
            editSettingsFeature: false,
            overlay: {showUP: false, loading: false},
            
        }
    },
    methods: {
        async getConfig () {
            this.loading = true
            let r = await fetch('/config')
            r = await this.$store.dispatch('fetchError', {response: r, text: 'Получение настроек.'})
            if (r == false) { this.loading = false; return 0 }
            this.config = r
            this.loading = false      
        },
        async setConfig () {
            this.overlay.showUP = true
            this.overlay.loading = true
            let r = await fetch('/config', { 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
                method: "POST", 
                body: JSON.stringify(this.config)
            })
            r = await this.$store.dispatch('fetchError', {response: r, text: 'Сохранение настроек.'})
            if (r == false) { this.overlay.loading = false; this.overlay.text = 'Произошла ошибка при сохранении настроек'; return 0 }
            this.overlay.loading = false
            this.overlay.text = 'Конфигурация успешно сохранена'
            
            
        },
        isFeaturesValid () {
            let features = this.$store.getters.license.features
            if (Object.keys(features).length == 0) { return 0 }
            features.forEach(element => {
                if (element.id == 1) { this.showSettingsFeature = true }
                    if (element.id == 2) { this.editSettingsFeature = true }
                });
            }
        },
        computed: {

        },
        async mounted() {
            await this.getConfig()
            this.isFeaturesValid()
            
        },
        components: {
            WaitingOverlay,
            Loading,
            SettingsCards,
        }
    }
    
</script>