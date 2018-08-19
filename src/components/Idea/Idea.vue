<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card>
                    <v-card-title>
                        <h4 class="primary--text">My Idea</h4>
                    </v-card-title>
                    <v-card-text>
                        <div class="info--text">17th July 2018</div>
                        <div>
                            In data mining, anomaly detection (also outlier detection) is the identification of items,
                            events or observations which do not conform to an expected pattern or other items in a dataset.
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon><v-icon>favorite</v-icon></v-btn>
                        <v-btn icon><v-icon>bookmark</v-icon></v-btn>
                        <v-btn icon><v-icon>share</v-icon></v-btn>
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