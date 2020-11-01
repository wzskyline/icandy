import data from './data'
const state = {
  deviceInfo: {},
  list:data.list,
  detail:data.detail,
};

const getters = {};
Object.keys(state).forEach(k => {
  getters[k] = s => s[k];
});

const mutations = {
  SET_DEVICE_INFO: (state, deviceInfo) => { state.deviceInfo = deviceInfo; },
  setList: (state, data) => { state.list = data; },
  setDetail: (state, data) => { state.detail = data; },
};

const actions = {
  getDeviceInfo: async ({ commit }) => {
    const response = await window.HWH5.getDeviceInfo().then(data => data);
    commit('SET_DEVICE_INFO', response);
  },
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
