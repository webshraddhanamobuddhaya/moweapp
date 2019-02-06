<template>
    <v-card :color="backColor(news.news_format)" >
        <!-- <p v-if="newsFeedisEmpty">News feed empty</p> -->
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

                <div v-if="news.tags.length" class="newsfeed-date-time"> 
                    <p class="news-date-line-height">{{news.tags[0]}}</p>
                    <p class="news-date-line-height"> {{news.tags[1]}}</p>
                    
                </div>
                
                <v-btn @click="goToNews(news.id)" small class="news-button" absolute>Details <v-icon right dark>navigate_next</v-icon> </v-btn>

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
        goToNews(newsId){
            console.log(newsId);
                this.$router.push('/news/'+newsId);
            store.dispatch("getSingleNewsData",newsId).then(response => {
                console.log("Got some data, now lets show something in this component")

                // Stop the radio
                // store.dispatch("stopRadio");
            }, error => {
                console.error("Got nothing from server. Prompt user to check internet connection and try again")
            });
        },
        
        
    },
    computed:{
        baseColor(){
            return this.$store.state.baseColor;
        },
        newsFeedisEmpty(){
            return store.state.newsFeedisEmpty;
        }
        
    }
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
    right: 5%;
}
.newsfeed-date-time{
    font-size: 12px;
    margin-top: -15px;
    color: black;
    /* background-color: rgba(255, 255, 255, .6); */
    padding: 5px;
}
.news-date-line-height{
    line-height: .7;
}

</style>
