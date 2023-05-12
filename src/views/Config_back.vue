<template>
    <v-container>
        <component :is="layout" @set="setConfig()" @reload="getConfig()" :config="config" :feature="editSettingsFeature"/>
        <WaitingOverlay :overlay="overlay"></WaitingOverlay>
    </v-container>

</template>

<script>
import WaitingOverlay from '../components/WaitingOverlay.vue'
import LoadingLayout from '../layouts/LoadingLayout.vue'
import NoSettingsFeatureLayout from '../layouts/NoSettingsFeatureLayout.vue'
import SettingsLayout from '../layouts/SettingsLayout.vue'



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
                let features = this.$store.getters.getLicense.features
                if (Object.keys(features).length == 0) { return 0 }
                features.forEach(element => {
                    if (element.id == 1) { this.showSettingsFeature = true }
                    if (element.id == 2) { this.editSettingsFeature = true }
                });
            }
        },
        computed: {
            layout () {
                if (this.loading == true) { return 'LoadingLayout' }
                return this.showSettingsFeature ? 'SettingsLayout' : 'NoSettingsFeatureLayout'
            }
        },
        async mounted() {
            await this.getConfig()
            this.isFeaturesValid()

        },
        components: {
            NoSettingsFeatureLayout,
            SettingsLayout,
            LoadingLayout,
            WaitingOverlay,
        }
    }

</script>