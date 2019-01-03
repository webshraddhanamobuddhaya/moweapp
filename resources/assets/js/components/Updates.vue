<template>
  <div
    id="e3"
  >

        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="loading"></spiner-basic>
        </v-layout>
        <v-layout row wrap justify-space-around v-if="!loading">
            <!-- <h2>status: {{statusText}}</h2> -->
          <v-flex xs12 sm5 pt-3 v-for="post in posts" :key="post.id">
              
            <v-hover>
                <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                :ripple="{ class: 'error--text' }"
                @click.native="goToLink(post.id)"
                >
                    <v-img
                        :src="post.image_url"

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
                <p class="subheading">{{post.post_title}}</p>
                </v-card>  
            </v-hover>
          </v-flex>

          
        </v-layout>
      <!-- </v-container> -->
    <!-- </v-card> -->
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
        store.dispatch("setNavTitle",'Latest Videos');
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