<template>
  <div
    id="e3"
  >

        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="loading"></spiner-basic>
            <!-- <h2>status: {{statusText}}</h2> -->
          <v-flex xs12 sm5 v-for="post in posts" :key="post.id" v-if="!loading">
              
        <v-hover>
            <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            :ripple="{ class: 'error--text' }"
            @click.native="goToLink(post.id)"
            >
                <v-img
                    :src="post.image_url"

                ></v-img>
              <p class="body-1">{{post.post_title}}</p>
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
            this.$router.push('/post/'+id);
        }
    },
    computed: {
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