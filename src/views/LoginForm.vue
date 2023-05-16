<template>

    <!-- <div> -->
        <v-col
        align="center"
        justify="center"
        >
            <v-card 
                elevation="4"
                outlined
                width="50%"
                > 
                    <v-card-title>Авторизация</v-card-title>
                    <v-card-subtitle class="red--text" v-if="authError">
                        Неверные логин/пароль!
                    </v-card-subtitle>
                    
                        
                    <v-form @submit.prevent="auth">
                        <v-card-text>
                            <TextField v-model="credentials.login" label="Логин"/>
                            <TextField v-model="credentials.password" label="Пароль" type="Password"/>    
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text :loading="loading" type="submit" color="primary">
                                Вход
                            </v-btn>
                        </v-card-actions>
                    </v-form>
            </v-card>  
        </v-col>
    <!-- </div> -->
</template>

<script>
import TextField from '../components/TextField.vue';

export default {
    data () {
        return {
            credentials: {login: '', password: ''},
            loading: false,
            authError: false,
        }
    },


    methods: {
        async auth() {
            this.loading = true
            this.authError = false
            await new Promise(e => setTimeout(e, 2000))
            console.log(this.credentials)
            if (this.credentials.login == 'admin' && this.credentials.password == 'admin'){
                localStorage.auth = true
                this.$router.go('/')
            }
            else {
                this.authError = true
                
            }
            this.loading = false
        }
    },

    components: {
        TextField,

    }
}

</script>