<template>
    <v-container>
        <v-layout row wrap v-for="idea in ideas" :key="idea._id" class="mb-2">
            <v-flex xs12 class="pt-2"> <!--  sm10 md8 offset-sm1 offset-md2-->
                <v-card class="primary lighten-5">
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="primary--text mb-3">{{idea.title}}</h3>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn class="info" flat :to="'/ideas/'+idea._id">
                                        <v-icon left>arrow_forward</v-icon>
                                        평가하기
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="red" dark><v-icon dark>favorite</v-icon>
                                        <span class="ml-2">{{idea.favorite}}</span>
                                    </v-btn>
                                </v-card-actions>
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
        computed: {
          ideas(){
              return this.$store.getters.loadedIdeas
          }
        },
        data () {
            return {
                page: 1
            }
        }
    }
</script>

<style scoped>

</style>