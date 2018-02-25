import Vue from 'vue';
import Vuex from 'vuex';
import user from '../store/user/index'
import album from '../store/album/index'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {
        user, album
    }
});
