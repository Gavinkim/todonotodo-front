<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="primary lighten-5">
                    <v-card-title>
                        <h4 class="primary--text">Then we'll go with that data file!</h4>
                    </v-card-title>
                    <v-card-text>
                        <div class="info--text">
                            I'm a thing. But, like most politicians, he promised more than he could deliver.
                            You won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                            Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry?
                            I've got to find a way to escape.
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon><v-icon color="red">favorite</v-icon></v-btn>
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