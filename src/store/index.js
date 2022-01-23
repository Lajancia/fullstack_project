

import { createStore } from "vuex";

export default createStore({
  state: {
        user:null
    },
    getters: {
        user: (state) => { return state.user;}
    },
    mutations: {
        setUser(state, user) { state.user = user;}
    }
});