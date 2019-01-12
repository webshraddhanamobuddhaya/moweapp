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
            <v-flex xs12>
                <v-card>
                    <div v-html="content" class="body-1">
                        <!-- {{content}} -->
                    </div>
                </v-card>

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
export default {

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
        }
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
    margin-bottom: 50px;
}
#single-news{
    padding-bottom: 50px;
}

</style>