<template>
    <v-container>
        <v-layout row wrap v-if="loading">
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                        indeterminate
                        class="blue--text"
                        :width="7"
                        :size="70"
                        v-if="loading">
                </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-else>
            <v-flex xs12>
                <v-card class="blue lighten-5">
                    <v-card-title>
                        <h4 class="primary--text">{{idea.title}}</h4>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-idea-details-dialog :idea="idea"></app-edit-idea-details-dialog>
                        </template>
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
            },
            userIsAuthenticated() {
                return this.$store.getters.user != null && this.$store.getters.user !== undefined
            },
            userIsCreator() {
                if(!this.userIsAuthenticated){
                    return false
                }
                return this.$store.getters.user.id === this.idea.creatorId
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>