<template>
    <v-container>
        <v-layout row v-if="error">
            <v-flex xs12 sm8 offset-sm2>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
        </v-layout>
        <v-layout row >
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="onSignup">
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
                                    <v-flex x12>
                                        <v-text-field
                                                name="confirmPassword"
                                                label="ConfirmPassword"
                                                id="confirmPassword"
                                                v-model="confirmPassword"
                                                type="password"
                                                required
                                                :rules="[comparePasswords]"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" :disabled="loading" :loading="loading">Signup
                                        <span slot="loader" class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                        </v-btn>
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
        name: "Signup",
        data () {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        computed: {
          comparePasswords() {
              return this.password !== this.confirmPassword ? 'Password do not match': ''
          },
          checkPasswordLength(){
            return this.password.length < 6 ? 'Password should be at least 6 characters': ''
          },
          user() {
             return this.$store.getters.user
          },
          error(){
              return this.$store.getters.error
          },
          loading() {
              return this.$store.getters.loading
          }
        },
        watch: {
          user(value){
              if(value != null && value !== undefined){
                  this.$router.push('/')
              }
          }
        },
        methods: {
            onSignup() {
                //Vuex
                //console.log({email: this.email,password: this.password,confirmPassword: this.confirmPassword});
                this.$store.dispatch('signUserUp',{email: this.email,password:this.password})
            },
            onDismissed() {
                this.$store.dispatch('clearError')
            }
        }
    }
</script>
