export default {
  poolData(state) {
    return {
      UserPoolId: state.UserPoolId,
      ClientId: state.ClientId,
    };
  },

  isLoading(state) {
    return state.loading;
  },

  isAuthenticated(state) {
    return state.authenticated;
  },

  getUserData(state) {
    return state.userData;
  },
};
