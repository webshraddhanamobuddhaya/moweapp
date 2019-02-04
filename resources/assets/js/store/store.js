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
        liveStreamId: undefined,
        radio_volume: .6,
        radioPlaying: false,
        radio: undefined,
        newsFeed: undefined,
        loadingNewsFeed: true,
        singleNewsLoading: false,
        singleNewsData:[],
        newsFeedisEmpty: false
    },
    getters: {
        getAllnews(state){
            return state.newsFeed;
        },
        getLoadingNewsFeedValue(state){
            return state.loadingNewsFeed;
        },
        getloading(state){
            return state.loading;
        }
    },
    actions: {
        // NewsFeed Actions
        getSingleNewsData(context, news_id) {
            context.commit('singleNewsLoading', true);
            return new Promise((resolve, reject) => {
                // Do something here... lets say, a http call using vue-resource
                let postUrl = '/api/video/' + news_id;
                axios.get(postUrl).then(response => {
                    // http success, call the mutator and change something in state
                    let video_id = response.data.video_url.replace('https://www.youtube.com/embed/', '');
                    let postData = {
                        post_id: news_id,
                        image: response.data.image_url,
                        post_title: response.data.post_title,
                        description: response.data.description,
                        video_id: video_id
                    };
                    context.commit('setSingleNewsData', postData);
                    context.commit('singleNewsLoading', false);

                    resolve(response); // Let the calling function know that http is done. You may send some data back
                }, error => {
                    // http failed, let the calling function know that action did not work out
                    reject(error);
                })
            })
        },
        getNewsFeedFromApi({commit,state}){
            if (state.newsFeed == undefined) {
                commit('setloadingNewsFeed',true);
                console.log('no data in newsfeed');
                return new Promise((resolve, reject) => {
                    axios.get('/api/newsfeed').then(response => {
                        // http success, call the mutator and change something in state
                        console.log(response.data);
                        commit('setNewsFeedData', response.data);
                        commit('setloadingNewsFeed',false);
    
                        // commit("stopLoading");
    
                        resolve(response); // Let the calling function know that http is done. You may send some data back
                    }, error => {
                        // http failed, let the calling function know that action did not work out
                        reject(error);
                    })
                })
            }
            if(state.newsFeed.length==0){
                commit('newsFeedisEmpty');
            }
        },
        //
        changeRadioVolume({state,commit}, value){
            state.radio.volume = value;
            commit("changeRadioVolume",value);
        },
        initRadio({commit}){
            commit("initRadio");
        },
        stopRadio({commit,state}){
            state.radio.pause();
            commit("stopRadio");
        },
        playRadio({commit,state}){
            if(!state.radioPlaying){
                state.radio.play();
                state.radio.volume = state.radio_volume;
                commit("startRadio");
            }
        },
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
                     console.log(response.data);
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
        // News Feed
        newsFeedisEmpty(state){
            state.newsFeedisEmpty = true;
        },
        setSingleNewsData(state,data){
            state.singleNewsData = data;
        },
        singleNewsLoading(state,value){
            state.singleNewsLoading = value;
        },
        setloadingNewsFeed(state, value){
            state.loadingNewsFeed = value;
        },
        setNewsFeedData(state,apiData){
            state.newsFeed = apiData;
        },

        //
        changeRadioVolume(state,value){
            state.radio_volume = value;
        },
        initRadio(state){
            state.radio = new Audio('http://69.46.24.226:7643/;');
        },
        stopRadio(state){
            state.radioPlaying = false;
            state.radio = new Audio('http://69.46.24.226:7643/;');
        },
        startRadio(state){
            state.radioPlaying = true;

        },
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
