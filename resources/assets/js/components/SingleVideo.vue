<template>
    <div id="single-video">
        
        <!-- <div class="plyr__video-embed" id="player">
            <iframe :src="post.video_url" allowfullscreen allowtransparency allow="autoplay" fullscreen></iframe>
        </div> -->
<!-- <vue-plyr>
  <div class="plyr__video-embed">
    <iframe
      :src="post.video_url"
      allowfullscreen allowtransparency allow="autoplay">
    </iframe>
  </div>
</vue-plyr> -->

<!-- youtube div element -->
<!-- <vue-plyr>
  <div data-plyr-provider="youtube" :data-plyr-embed-id="video_id"></div>
</vue-plyr> -->
<youtube-player-iframe :video_url="video_url"></youtube-player-iframe>

        <v-layout row wrap>
            <v-flex xs12 pt-2>
                <v-card class="bottom-margin">
                    <v-card-title primary-title>
                        <div class="headline">{{post_title}} </div>
                    </v-card-title>
                    <!-- <p class="body-1 body-text">{{post_description}}</p> -->
                    <p v-html="post_description" class="body-1 body-text"></p>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import store from "../store/store";

export default {
    
    computed:{
        post_title(){
            return store.state.singlePost.post_title;
        },
        post_description(){
            return store.state.singlePost.description;
        },
        video_id(){
            return store.state.singlePost.video_id;
         },
        video_url(){
            return store.state.singlePost.video_url;
         }

    },
    created(){
        store.dispatch("setNavTitle",'Single Video');
        let post_id = this.$route.params.id;
        // store.dispatch("getSingleVideoData", post_id);
        console.log("created");

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
.bottom-margin{
    margin-bottom: 100px;
}


</style>