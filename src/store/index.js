import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
Vue.use(Vuex);

// export const namespaced = true;

export default new Vuex.Store({
  state: {
    aisles: [],
    aisle: [],
    isLoading: false,
  },
  actions,
  mutations,
  getters,
})