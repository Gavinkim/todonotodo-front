<template>
    <v-container>
        <v-layout row>
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
        <v-layout row wrap v-for="idea in ideas" :key="idea.id" class="mb-2" v-if="!loading">
            <v-flex xs12 class="pt-2"> <!--  sm10 md8 offset-sm1 offset-md2-->
                <v-card class="blue lighten-5">
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="primary--text mb-3">{{idea.title}}</h3>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn class="info" flat :to="'/ideas/'+idea.id">
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
        <!--fixme: 데이터가 아무거도 없거나, 서버로부터 받지 못할 경우 아래 페이징 처리가 안보여야 한다.-->
        <v-flex right v-if="!loading">
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
          },
          loading() {
              return this.$store.getters.loading
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