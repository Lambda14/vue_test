<template>
    <v-container
    align="center"
    justify="center">
        <v-col
        align="center"
        justify="center">
        
            <v-progress-circular
            :size="100"
            :width="7"
            color="cyan"
            indeterminate
            ></v-progress-circular>
            <div>
                {{ text }}
            </div>
            
        </v-col>
    </v-container>

</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: ['text']
}

</script>