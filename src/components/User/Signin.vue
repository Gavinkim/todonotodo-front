<template>
    <v-container>
        <v-layout row >
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="onSignin">
                                <v-layout row>
                                    <v-flex x12>
                                        <v-text-field
                                                name="email"
                                                label="Mail"
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex x12>
                                        <v-text-field
                                                name="password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required
                                                :rules="[checkPasswordLength]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit">Signin</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Signin",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            checkPasswordLength(){
                return this.password.length < 6 ? 'Password should be at least 6 characters': '';
            },
            user() {
                return this.$store.getters.user
            }
        },
        watch: {
            user(value){
                if(value != null && value !== undefined){
                    this.$router.push('/');
                }
            }
        },
        methods: {
            onSignin() {
                //Vuex
                this.$store.dispatch('signUserIn',{email: this.email,password:this.password});
            }
        }
    }
</script>

<style scoped>

</style>