import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseColor: '#009688',
        loading: true,
        dataStatus: 'int',
        navTitle: 'Shraddha Media Netwok',
        updates: [],
        singlePost:[],
        videoUrlData:[],
        liveStreamId: undefined
    },
    getters: {

    },
    actions: {
        getTvLiveStreamingData({commit}){
            commit("startLoading");

            return new Promise((resolve, reject) => {
                axios.get('/api/live_id').then(response => {
                    // http success, call the mutator and change something in state
                    let video_id = response.data.video_id;
                    console.log("live id: "+video_id);
                    commit('setLiveStreamId', video_id);
                    commit("stopLoading");

                    resolve(response); // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },
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
                    context.commit("stopLoading");

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
             if (state.updates.length==0) {
                 commit("startLoading");
                 axios.get('/api/videos').then((response) => {
                     commit("setApiData",response.data);
                     commit("stopLoading");

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
        setLiveStreamId(state, live_id){
            state.liveStreamId = live_id;
        },
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
        stopLoading(state){
            state.loading = false;
        },
        setNavTitle(state,title){
            state.navTitle = title;
        }
    }
});
