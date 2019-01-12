<template>
    <v-card :color="backColor(news.news_format)" >
        <v-layout row wrap pa-2>
            <!-- image -->
            <v-flex xs6>
                <v-img :src="news.image_url">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                    <v-progress-circular indeterminate :color="baseColor"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
            <!-- content -->
            <v-flex xs6 class="white--text news-infomaion" >
                <p class="subheading">{{news.post_title}}</p>
                <!-- <p class="subheading">ඔබත් එක්වන්න</p> -->
                
                <v-btn small class="news-button" absolute>Details <v-icon right dark>navigate_next</v-icon> </v-btn>

            </v-flex>
        </v-layout>
    </v-card>  
</template>
<script>
import store from "../../store/store"; 
export default {
    props: ['news'],
    data(){
        return {
            
        }
    },
    methods: {
        backColor(newsFormat){
            switch (newsFormat) {
                case 'Charity':
                    return "#F68121";
                    break;
                case 'donation':
                    return "#0054A5";
                    break;
                case 'Event':
                    return "#B11016";
                    break;
            
            }
        },
    },
    computed:{
        baseColor(){
            return this.$store.state.baseColor;
        }
    },
}
</script>
<style>
#news-page{
    margin-bottom: 50px;
    /* background: transparent; */
}
.news-infomaion{
    position: relative;
}
.news-button {
    position: absolute;
    bottom: 0;
    right: 0;
}

</style>
