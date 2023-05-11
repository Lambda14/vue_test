<template>
    <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    >
    {{ text }}
    </v-snackbar>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        props: ['timeout', 'text'],
    }
</script>