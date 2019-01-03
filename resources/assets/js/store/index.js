import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import contact from './modules/contact'
import updates from './modules/updates'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        contact,
        updates
    }
})