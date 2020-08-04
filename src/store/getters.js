export const getters = {
  aisles(state) {
    return state.aisles
  },
  getAisleByID: state => id => {
    if(state.aisles.length > 0) {
      return state.aisles.find(aisle => aisle.id === id)
    }
  },
  aisle(state) {
    return state.aisle
  },
}