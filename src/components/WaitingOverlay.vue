<template>
    <v-overlay
          v-model="overlay.showUP"
          contained
          class="align-center justify-center"
        >
        <div v-if="overlay.loading">
            <Loading :text="'Сохраняем настройки...'"></Loading>
        </div>
        <v-col v-else>
            <v-row justify="center" align="center">{{ overlay.text }}</v-row>
            <v-row justify="center" align="center">
            <v-btn
                color="success"
                @click="overlay.showUP = false"
            >
                Ok
            </v-btn>
            </v-row>
        </v-col>
    </v-overlay>
</template>

<script>
import Loading from './Loading.vue';



export default {
    data() {
        return {
        }
    },
    props: ['overlay'],
    components: {
        Loading
    }
 
}

</script>