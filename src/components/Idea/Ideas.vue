<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 class="pt-1"> <!--  sm10 md8 offset-sm1 offset-md2-->
                <v-card class="primary lighten-5">
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                        :src="require('@/assets/back_01.jpg')"
                                        height="150px">
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="info--text mb-2">Then we'll go with that data file!</h3>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/ideas/1">
                                        <v-icon left>arrow_forward</v-icon>
                                        평가하기
                                    </v-btn>
                                    <v-btn icon @click="show = !show">
                                        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-badge overlap>
                                        <span slot="badge"><strong>10</strong></span>
                                        <v-avatar color="purple red--after">
                                            <v-icon dark>favorite</v-icon>
                                        </v-avatar>
                                    </v-badge>
                                </v-card-actions>
                                <v-slide-y-transition>
                                    <v-card-text v-show="show">
                                        I'm a thing. But, like most politicians, he promised more than he could deliver.
                                        You won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                                        Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk!
                                        You're going to do his laundry? I've got to find a way to escape.
                                    </v-card-text>
                                </v-slide-y-transition>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <v-flex right>
            <v-pagination
                    class="pt-4"
                    v-model="page"
                    :length="15"
                    :total-visible="7"
            >
            </v-pagination>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "Ideas",
        data () {
            return {
                page: 1,
                show: false,
            }
        }
    }
</script>

<style scoped>

</style>