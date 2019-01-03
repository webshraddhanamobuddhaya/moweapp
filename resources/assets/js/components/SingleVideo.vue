<template>
    <div id="single-video">
<!-- youtube div element -->
<vue-plyr>
  <div data-plyr-provider="youtube" :data-plyr-embed-id="video_id"></div>
</vue-plyr>

        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">{{post_title}} </div>
                    </v-card-title>
                    <p class="subheading body-text"><span v-html="post_description"></span></p>
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

</style>