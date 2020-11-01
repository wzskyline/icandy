import data from './data'
const state = {
  nav:1,
  navShow:true,
  deviceInfo: {},
  list:data.list,
  detail:data.detail,
};

const getters = {};
Object.keys(state).forEach(k => { getters[k] = s => s[k]; });

const mutations = {
  SET_DEVICE_INFO: (state, deviceInfo) => { state.deviceInfo = deviceInfo; },
  setList: (state, data) => { state.list = data; },
  setDetail: (state, data) => { state.detail = data; },
  setNav: (state, data) => { state.nav = data; },
  setNavShow: (state, data) => { state.navShow = data; },
};

const actions = {
  getDeviceInfo: async ({ commit }) => {
    const response = await window.HWH5.getDeviceInfo().then(data => data);
    commit('SET_DEVICE_INFO', response);
  },
  setNav: async ({ commit },data) => { commit('setNav', data); },
  setNavShow: async ({ commit },data) => { commit('setNavShow', data); },
  
  getList: async ({ commit },arg) => {
    console.log(data)
    console.log(state.list)
  },
  getDetail: async ({ commit },arg) => {
    console.log(data)
    console.log(state.list)
  },
  
};

export default {
  state,
  getters,
  mutations,
  actions
};
