import axios from 'axios';
export const actions = {
  getAisles({commit}) {
    commit('SET_LOADING', true)
    axios
      .get('/aisles/')
      .then(response => {
        commit('SET_LOADING', false)
        commit('SET_AISLES', response.data)
      })
      .catch(err => {
        commit('SET_LOADING', false)
        console.log(err)
      })
  },
  getSingleAisle({commit}, id) {
    commit('SET_LOADING', true)
    axios
      .get(`/aisles/${id}`)
      .then(response => {
        commit('SET_LOADING', false)
        commit('SET_SINGLE_AISLE', response.data)
      })
      .catch(err => {
        commit('SET_LOADING', false)
        console.log(err)
      })
  }
}