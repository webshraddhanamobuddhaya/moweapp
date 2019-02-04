<template>
    <div id="e3">
        <!-- Show spiner -->
        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="loading"></spiner-basic>
        </v-layout>
        <!-- Load content -->
        <v-layout row wrap justify-space-around v-if="!loading">
            <v-flex xs12 sm6>
            <news-carousel></news-carousel>
            <v-spacer>
                <p class="caption">
                    <v-icon class="body-1" color="red">notification_important</v-icon> Latest News
                </p>
            </v-spacer>
            </v-flex>
            <v-flex xs12 py-3>
                <p class="title"><v-icon>update</v-icon> Updates</p>
                <v-divider></v-divider>

            </v-flex>

            <v-flex xs12 v-for="post in posts" :key="post.id">             
            <v-hover>
                <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    :ripple="{ class: 'error--text' }"
                    @click.native="goToLink(post.id)"
                >

                        <v-img :src="post.image_url">
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

                        <p class="body-1">{{post.post_title}}</p>
      
                </v-card>  
            </v-hover>
            </v-flex>  
        </v-layout>
    </div>
</template>
<script>
import store from "../store/store";
export default {
    data(){
        return {
            // posts:[]
        }
    },
    created(){
        store.dispatch("getApiData");
    },

    methods: {
        goToLink(id){
            console.log(id);
            // this.$store.dispatch("getSingleVideoData", id);
            store.dispatch("startLoading");
            store.dispatch("getSinglePostData",id).then(response => {
                console.log("Got some data, now lets show something in this component")
                this.$router.push('/post/'+id);

                // Stop the radio
                // store.dispatch("stopRadio");
            }, error => {
                console.error("Got nothing from server. Prompt user to check internet connection and try again")
            });
        }
    },
    computed: {
        baseColor(){
            return store.state.baseColor;
        },
        statusText(){
            return store.state.dataStatus;
        },
        posts(){
            return store.state.updates;
        },
        loading(){
            return store.state.loading;
        }
    }
}
</script>
<style>
#e3{
    margin-bottom: 100px;
    /* background: transparent; */
}

</style>