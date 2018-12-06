<template>
  <div
    id="e3"


  >

    <!-- <v-card id="update-main-card"> -->
      <!-- <v-container
        fluid
        grid-list-lg
      > -->
        <v-layout row wrap justify-space-around>
          <v-flex xs12 sm5 v-for="post in posts" :key="post.id">
 
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
export default {
    data(){
        return {
            posts:[]
        }
    },
    mounted(){
        axios.get('/public/api/videos').then((response) => {
            this.posts = response.data;
            console.log(response);
        })
    },
    methods: {
        goToLink(id){
            console.log(id);
            this.$router.push('/post/'+id);
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