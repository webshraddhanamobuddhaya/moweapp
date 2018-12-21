import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseColor: '#D81B60',
        loading: true,
        dataStatus: 'int',
        navTitle: 'Shraddha Media Netwok',
        updates: [],
        singlePost:[],
        videoUrlData:[]
    },
    getters: {

    },
    actions: {
        startLoading({commit}){
            commit("startLoading");
        },
        getSinglePostData(context, post_id) {
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                let postUrl = '/api/video/' + post_id;
                axios.get(postUrl).then(response => {
                    // http success, call the mutator and change something in state
                    let video_id = response.data.video_url.replace('https://www.youtube.com/embed/', '');
                    let postData = {
                        post_id: post_id,
                        post_title: response.data.post_title,
                        description: response.data.description,
                        video_id: video_id

                    };
                    context.commit('setSingleVideoData', postData);
                    context.commit("changeLoading");

                    resolve(response); // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },
        loadingData(context){
            context.commit('loadingApiData');
        },
        getApiData({state,commit}){
             if (state.loading) {
                 axios.get('/api/videos').then((response) => {
                     commit("setApiData",response.data);
                     commit("changeLoading");

                     let responseData = response.data;
                     let videoUrlData = responseData.map(urlData => {
                         let postId = urlData.id;
                         let videoUrl = urlData.video_url;
                         return {
                             [postId]: videoUrl
                         }
                     });
                     commit('setVideoUrlData', videoUrlData);
                     
                 });
             }
            // commit('getApiData');
        },
        setNavTitle(context,title){
            context.commit('setNavTitle',title);
        },
        getSingleVideoData(context, post_id) {
            let postUrl = '/api/video/' + post_id;
            axios.get(postUrl).then((response) => {
                let video_id = response.data.video_url.replace('https://www.youtube.com/embed/', '');
                let postData = {
                    post_id: post_id,
                    post_title: response.data.post_title,
                    description: response.data.description,
                    video_id: video_id
                    
                };
                context.commit('setSingleVideoData', postData);

            });
        }
    },
    mutations: {
        startLoading(state) {
            state.loading = true;
        },
        setVideoUrlData(state,data){
            state.videoUrlData = data;
        },
        setSingleVideoData(state,postData){
            state.singlePost = postData;
        },
        loadingApiData(state){
            state.dataStatus = 'loading';
        },
        setApiData(state, data){
            state.updates = data;
        },
        changeLoading(state){
            state.loading = false;
        },
        setNavTitle(state,title){
            state.navTitle = title;
        }
    }
});
