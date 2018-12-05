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
            posts:[
                // {id:1, image_url:"https://cdn.vuetifyjs.com/images/cards/desert.jpg", post_title: "Name of the programe thats all"},
                // {id:2, image_url:"https://cdn.vuetifyjs.com/images/cards/desert.jpg", post_title: "title 2: Name of the programe thats all"},
                // {id:3, image_url:"https://cdn.vuetifyjs.com/images/cards/desert.jpg", post_title: "title 3: Name of the programe thats all"},
                // {id:4, image_url:"https://cdn.vuetifyjs.com/images/cards/desert.jpg", post_title: "title 4: Name of the programe thats all"}
            
            ]
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
            this.$router.push('/public/post/'+id);
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