<template>
    <v-content>
        <v-carousel
        hide-delimiters
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
        height='auto'
        light
        >

        <v-carousel-item
            v-for="(news,i) in newsFeed"
            :key="i"

        >
            <news-feed-single :news="news"></news-feed-single>
        </v-carousel-item>
        
        </v-carousel>
    </v-content>
</template>
<script>
import store from "../../store/store";
import NewsFeedSingle from './NewsFeedSingle.vue'
export default {
    components: {
    'news-feed-single':NewsFeedSingle
    },
    computed: {
        newsFeed(){
          console.log(store.state.newsFeed);
            return store.state.newsFeed;
        },
    },
    created(){
        console.log('carousel created');
        store.dispatch("getNewsFeedFromApi");
    }
}
</script>
<style>
#spinerHeight{
    height: 100vw;
}
</style>
