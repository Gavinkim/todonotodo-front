<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="primary lighten-5">
                    <v-card-title>
                        <h4 class="primary--text">개발자를 위한 개발자</h4>
                    </v-card-title>
                    <v-card-text>
                        <div class="info--text">
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                            개발자를 위한 개발자와 개발자 개발자를 위한 개발자와 개발자
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon><v-icon>favorite</v-icon></v-btn>
                        <v-btn icon><v-icon>share</v-icon></v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat to="/ideas">
                            <v-icon left>arrow_forward</v-icon>
                            목록으로
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Idea"
    }
</script>

<style scoped>

</style>