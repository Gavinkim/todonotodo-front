<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-form>
                    <v-text-field
                            label="title"
                            required
                    ></v-text-field>
                    <v-textarea
                            name="input-7-1"
                            label="content"
                            value=""
                            hint="Please write specific your idea"
                    ></v-textarea>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "CreateIdea"
    }
</script>

<style scoped>

</style>