export default {
  changeCity (state, n) {
    state.city = n
    try {
      localStorage.city = n
    } catch (error) {}
  }
}
