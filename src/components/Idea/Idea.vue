<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card class="blue lighten-5">
                    <v-card-title>
                        <h4 class="primary--text">{{idea.title}}</h4>
                    </v-card-title>
                    <v-card-text>
                        <div>
                            {{idea.content}}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon><v-icon color="red">favorite</v-icon></v-btn>
                        <v-btn icon><v-icon>share</v-icon></v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="info"flat to="/ideas">
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
        name: "Idea",
        props: ['id'],
        computed: {
            idea() {
                return this.$store.getters.loadedIdea(this.id) // this.$router.params.id or props to route
            }
        }
    }
</script>

<style scoped>

</style>