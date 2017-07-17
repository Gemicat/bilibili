import {bannerApi} from 'api';
import * as TYPE from '../actionType/bannerType'

const state = {
  bannerList: []
}

const getters = {
  bannerlist: state=> state.bannerList
}

const actions = {
  bannerlist({commit, state, rootState}) {
    rootState.requesting = true;
    commit(TYPE.BANNER_LIST_REQUEST);
    bannerApi.list().then((res) => {
      rootState.requesting = false;
      commit(TYPE.BANNER_LIST_SUCCESS, res)
    }, (error) => {
      rootState.requesting = false;
      commit(TYPE.BANNER_LIST_FAILURE)
    });
  }
}

const mutations = {
  [TYPE.BANNER_LIST_REQUEST] (state) {},
  [TYPE.BANNER_LIST_SUCCESS] (state, bannerlist) {
    state.bannerlist = bannerlist.data;
  },
  [TYPE.BANNER_LIST_FAILURE] (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}