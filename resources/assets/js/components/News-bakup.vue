<template>
  <div
    id="news-page"
  >
        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="loadingNewsFeed"></spiner-basic>
            <!-- <h2>status: {{statusText}}</h2> -->
        </v-layout>

        <v-layout row wrap justify-space-around v-if="!loadingNewsFeed">
            <!-- <v-card>
            <h3>Latest News</h3>

            </v-card> -->
          <v-flex xs12 v-for="news in newsFeed" :key="news.id">

            <v-card >
                <v-container
                fluid
                grid-list-lg
                >
                <v-layout row wrap >                           
                    <v-flex xs12 md10 offset-md1 >
                        <v-card :color="backColor(news.news_format)" class="white--text">
                            <v-layout>
                            <v-flex xs6>
                                <!-- <v-img
                                :src="news.image_url"

                                ></v-img> -->
                                <v-img pr-3
                                    :src="news.image_url"

                                >
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
                            <v-flex xs6 align-center justify-space-around column fill-height>
                                <!-- <v-card-title primary-title> -->
                                <v-layout align-center justify-space-around column fill-height>
                                    <div class="subheading">{{news.post_title}}</div>
                                    <!-- <div>Foster the People</div> -->
                                    <div class="subheading">ඔබත් එක්වන්න</div>
                                </v-layout>
                                <!-- </v-card-title> -->
                            </v-flex>
                            </v-layout>
                            <!-- <v-divider light></v-divider> -->
                            <!-- <v-card-actions class="pa-3">
                            Rate this album
                            <v-spacer></v-spacer>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            </v-card-actions> -->
                        </v-card>
                    </v-flex>
        
                    
                </v-layout>
                </v-container>
            </v-card>

          </v-flex>

          
        </v-layout>
      <!-- </v-container> -->
    <!-- </v-card> -->
  </div>
</template>
<script>
import store from "../store/store";
import { mapGetters } from 'vuex'
export default {
    data(){
        return {

        }
    },
    created(){
        store.dispatch("getNewsFeedFromApi");
        console.log('created');
        
    },

    methods: {
        backColor(newsFormat){
            switch (newsFormat) {
                case 'Charity':
                    return "red";
                    break;
                case 'donation':
                    return "blue";
                    break;
                case 'Event':
                    return "green";
                    break;
            
            }
        },
    },
    computed: {
        // ...mapGetters ([
        //     'newsFeed',
        //     'loadingNewsFeed'
        // ]),
        newsFeed(){
            console.log('newsFeed');
            console.log(this.$store.getters.newsFeed);
            console.log('newsFeed from store');
            console.log(store.state.newsFeed);
            console.log('newsFeed finished');
            return store.state.newsFeed;
        },
        loadingNewsFeed(){
            console.log(store.getters.loadingNewsFeed);
            return store.state.loadingNewsFeed;
        },
        baseColor(){
            return store.state.baseColor;
        }
    }
}
</script>
<style>


</style>