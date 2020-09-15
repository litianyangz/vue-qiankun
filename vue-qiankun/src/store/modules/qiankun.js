const state = {
    isQiankun: false
}
const mutations = {
    SETXKCSID:(state, payload) => {
        state.isQiankun = payload;
    }
}
const actions = {
    setXkcsid: ({ commit }, payload) => {
        commit('SETXKCSID', payload)
    }
}
const getters = {
    isQiankun(state) {
        return state.isQiankun;
    }
}
export default { state, mutations, actions, getters }