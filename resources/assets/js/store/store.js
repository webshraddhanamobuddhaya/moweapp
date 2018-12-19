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
    },
    getters: {

    },
    actions: {
        loadingData(context){
            context.commit('loadingApiData');
        },
        getApiData(context){
            context.commit('getApiData');
        },
        setNavTitle(context,title){
            context.commit('setNavTitle',title);
        }
    },
    mutations: {
        loadingApiData(state){
            state.dataStatus = 'loading';
        },
        getApiData(state){
            if(state.loading){
                axios.get('/public/api/videos').then((response) => {
                    state.loading = false;
                    state.updates = response.data;
                });
            }
        },
        setNavTitle(state,title){
            state.navTitle = title;
        }
    }
});
