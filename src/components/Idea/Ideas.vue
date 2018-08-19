<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="primary lighten-5">
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                        :src="require('@/assets/back_01.jpg')"
                                        height="130px">
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h4 class="info--text mb-2">개발자를 위한 개발자</h4>
                                        <div>개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자 ...</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/ideas/1">
                                        <v-icon left>arrow_forward</v-icon>
                                        평가하기
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-badge overlap>
                                        <span slot="badge"><strong>10</strong></span>
                                        <v-avatar color="purple red--after">
                                            <v-icon dark>favorite</v-icon>
                                        </v-avatar>
                                    </v-badge>
                                </v-card-actions>

                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Ideas"
    }
</script>

<style scoped>

</style>