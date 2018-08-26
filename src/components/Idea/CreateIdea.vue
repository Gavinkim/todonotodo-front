<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
                <h4 class="info--text mb-3">작성된 아이디어는 관리자 심사 후 오픈 됩니다.</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <v-form @submit.prevent="onCreateIdea">
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-text-field
                                    name="title"
                                    label="제목"
                                    required
                                    value=""
                                    id="title"
                                    v-model="title"
                                    hint="아이디어를 잘 표현 할 수 있도록 제목을 작성 하여 주세요."
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-textarea
                                    name="content"
                                    label="내용"
                                    required
                                    value=""
                                    id="content"
                                    multi-line
                                    v-model="content"
                                    hint="아이디어에 대해 상세 내용을 작성 해주세요."
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-btn class="info" :disabled="!formIsValid"
                            type="submit">Create Idea</v-btn>
                        </v-flex>
                    </v-layout>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CreateIdea",
        data(){
            return {
                title: '',
                content: '',
                created:''
            }
        },
        computed: {
            formIsValid() {
                return this.title !=='' && this.content !== ''
            }
        },
        methods: {
            onCreateIdea(){
                if(!this.formIsValid){
                    return
                }
                const ideaData = {
                    title: this.title,
                    content: this.content,
                    created: new Date()
                };
                this.$store.dispatch('createIdea',ideaData)
                this.$router.push('/ideas')
            }
        }
    }
</script>

<style scoped>

</style>