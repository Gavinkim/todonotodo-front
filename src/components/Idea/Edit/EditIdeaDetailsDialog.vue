<template>
    <v-dialog width="700px" persistent v-model="editDialog">
        <v-btn fab accent slot="activator">
            <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>아이디어 수정</v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    name="title"
                                    label="제목"
                                    required
                                    value=""
                                    id="title"
                                    v-model="editedTitle"
                                    hint="아이디어를 잘 표현 할 수 있도록 제목을 작성 하여 주세요."
                            ></v-text-field>
                            <v-textarea
                                    name="content"
                                    label="내용"
                                    required
                                    value=""
                                    id="content"
                                    multi-line
                                    v-model="editedContent"
                                    hint="아이디어에 대해 상세 내용을 작성 해주세요."
                            ></v-textarea>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-btn flat class="blue--text darken-1" @click="editDialog=false">Close</v-btn>
                            <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditIdeaDetailsDialog",
        props: ['idea'],
        data() {
            return {
                editDialog: false,
                editedTitle: this.idea.title,
                editedContent: this.idea.content
            }
        },
        methods: {
            onSaveChanges() {
                if(this.editedTitle.trim() === '' || this.editedContent.trim() === ''){
                    return
                }
                this.editDialog = false
                this.$store.dispatch('updateIdeaData',{
                    id: this.idea.id,
                    title: this.editedTitle,
                    content: this.editedContent
                })
            }
        }
    }
</script>

<style scoped>

</style>