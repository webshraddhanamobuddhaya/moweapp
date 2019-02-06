<template>
    <div id="single-news">
        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="singleNewsLoading"></spiner-basic>
        </v-layout>
        <v-flex v-if="!singleNewsLoading" xs12>
        
            <v-flex xs12 sm6 offset-sm3 pb-2>
                <v-card>
                        <v-img :src="image_url">
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
                    <v-card-title>
                        {{post_title}}
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 pb-2 class="total-body">
                <v-card class="card-bottom">
                    <div v-html="content" class="body-1 body-text">
                        <!-- {{content}} -->
                    </div>
                </v-card>
                <!-- <v-card class="card-bottom">
                    <vue-plyr>
                        <div data-plyr-provider="youtube" :data-plyr-embed-id="video_id"></div>
                    </vue-plyr>
                </v-card> -->
                    <news-carousel></news-carousel>
                    <v-spacer>
                        <p class="caption">
                            <v-icon class="body-1" color="red">notification_important</v-icon> Latest News
                        </p>
                    </v-spacer>


            </v-flex>
        </v-flex>
<!-- <vue-plyr>
  <div data-plyr-provider="youtube" :data-plyr-embed-id="video_id"></div>
</vue-plyr>

        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">{{post_title}} </div>
                    </v-card-title>
                    <p class="body-1 body-text">{{post_description}}</p>
                </v-card>
            </v-flex>
        </v-layout> -->
    </div>
</template>

<script>
import store from "../store/store";
// import NewsFeedSingle from './subcompornents/NewsFeedSingle.vue';
export default {
    // components: {
    //     'news-feed-single': NewsFeedSingle
    // },

    computed:{
        singleNewsLoading(){
            return store.state.singleNewsLoading;
        },
        post_title(){
            return store.state.singleNewsData.post_title;
        },
        image_url(){
            return store.state.singleNewsData.image;
        },
        baseColor(){
            return store.state.baseColor;
        },
        content(){
            return store.state.singleNewsData.description;
        },
        newsFeed(){
            return store.state.newsFeed;
        },
        video_id(){
            return store.state.singlePost.video_id;
         },
        // post_description(){
        //     return store.state.singlePost.description;
        // },
        // video_id(){
        //     return store.state.singlePost.video_id;
        //  },

    },
    created(){
        // store.dispatch("setNavTitle",'Single Video');
        // let post_id = this.$route.params.id;
        // console.log("created");

    },

    methods: {
        
        

    }
}
</script>

<style>
#youtube-video-player{
    padding-bottom: 25px;
}
.body-text{
    text-align: justify;
    line-height: 1.6;
    padding: 10px;
    /* margin-bottom: 100px; */
}
#single-news{
    padding-bottom: 50px;
}
.total-body{
    margin-bottom: 50px;
}
.card-bottom{
    margin-bottom: 15px;
}

</style>