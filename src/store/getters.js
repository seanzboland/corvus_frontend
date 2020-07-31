export const getters = {
  aisles(state) {
    return state.aisles
  },
  singleAisle(state, id) {
    return state.aisles.filter(item => item.id == id)
  },
  aisle(state) {
    return state.aisle
  }
}