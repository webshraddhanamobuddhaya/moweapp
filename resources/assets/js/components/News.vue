<template>
    <div id="news-page">
        <!-- Show spiner -->
        <v-layout row wrap justify-space-around>
            <spiner-basic v-if="loadingNewsFeed"></spiner-basic>
        </v-layout>
        <!-- Load content -->
        <v-layout row wrap justify-space-around v-if="!loadingNewsFeed">
            <v-flex xs12 py-3>
                <p class="title"><v-icon color="red">notification_important</v-icon> Latest News</p>
                <v-divider></v-divider>

            </v-flex>
            <v-flex xs12 sm7 v-for="news in newsFeed" :key="news.id" pb-2>             

                <news-feed-single :news="news"></news-feed-single>

            </v-flex>  
        </v-layout>
    </div>
</template>
<script>
import store from "../store/store";
import NewsFeedSingle from './subcompornents/NewsFeedSingle.vue';

export default {
    components: {
        'news-feed-single': NewsFeedSingle
    },
    data(){
        return {

        }
    },
    created(){
        store.dispatch("getNewsFeedFromApi");
        console.log('created');
        
    },

    methods: {

    },
    computed: {
        newsFeed(){
            return store.state.newsFeed;
        },
        loadingNewsFeed(){
            return store.state.loadingNewsFeed;
        },
        baseColor(){
            return store.state.baseColor;
        }
    }
}
</script>
