import {
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

import { UserPool, getToken, sessionValid } from "../../boot/cognito";

export default {
  register(context, credentials) {
    return new Promise((resolve, reject) => {
      const attributeList = [];
      var dataEmail = {
        Name: "email",
        Value: credentials.Email,
      };
      var dataPhoneNumber = {
        Name: "phone_number",
        Value: credentials.phone_number,
      };
      var attributeEmail = new CognitoUserAttribute(dataEmail);
      var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
      attributeList.push(attributeEmail);
      attributeList.push(attributePhoneNumber);

      UserPool.signUp(
        credentials.Email,
        credentials.Password,
        attributeList,
        null,
        function (err, result) {
          if (err) {
            console.log(err);
            return reject(err || JSON.stringify(err));
          }
          var cognitoUser = result.user;
          if (cognitoUser) resolve(true);
          //   console.dir(cognitoUser);
          //   console.log("user name is " + cognitoUser.getUsername());
        }
      );
    });
  },

  confirm(context, credentials) {
    return new Promise((resolve, reject) => {
      const userData = {
        Username: credentials.Email,
        Pool: UserPool,
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.confirmRegistration(
        credentials.Code,
        true,
        function (err, result) {
          if (err) {
            console.log(err);
            return reject(err || JSON.stringify(err));
          }
          resolve(result);
          //   console.log("call result: " + result);
        }
      );
    });
  },

  authenticate({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      const authDetails = new AuthenticationDetails(credentials);
      const userData = {
        Username: credentials.Email,
        Pool: UserPool,
      };
      const cognitoUser = new CognitoUser(userData);
      cognitoUser.authenticateUser(authDetails, {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken();
          //   console.log(accessToken);
          commit("setAuthenticated", true);
          return resolve(true);
        },
        onFailure: (err) => {
          return reject(err || JSON.stringify(err));
        },
      });
    });
  },

  signout({ commit }) {
    commit("signOutUser");
    this.$router.push("/login");
  },
};
