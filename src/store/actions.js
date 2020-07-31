import axios from 'axios';
export const actions = {
  getAisles({commit}) {
    axios
      .get('/aisles/')
      .then(response => {
        commit('SET_AISLES', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getSingleAisle({commit}, id) {
    axios
      .get(`/aisles/${id}`)
      .then(response => {
        commit('SET_SINGLE_AISLE', response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}