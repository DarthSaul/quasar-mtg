export default {
  updateUserData(state, data) {
    state.userData = data;
  },

  setAuthenticated(state, bool) {
    state.authenticated = bool;
  },

  signOutUser(state) {
    state.authenticated = false;
  },

  setLoading(state, bool) {
    state.loading = bool;
  },
};
