<template>
    <div>
        <SettingsCards :config="config" :feature="!feature"/>
        <v-btn class="ma-5" color="green" @click="$emit('set')" :disabled="!feature">Сохранить</v-btn>
        <v-btn class="ma-5" color="red" @click="$emit('reload')" :disabled="!feature">Сбросить</v-btn>
    </div>
</template>

<script>
import SettingsCards from '../components/SettingsCards.vue'

export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    props: ['config', 'feature'],
    components: {
        SettingsCards
    }
}

</script>