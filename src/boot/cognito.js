import { boot } from "quasar/wrappers";
import { CognitoUserPool } from "amazon-cognito-identity-js";

const UserPool = new CognitoUserPool({
  UserPoolId: "us-east-2_2boDY2ePb",
  ClientId: "4asu7si507ifm0ps7gj97g6fq4",
});

const getUserSession = async function () {
  const user = UserPool.getCurrentUser();
  return new Promise((resolve, reject) => {
    if (user) {
      user.getSession((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    } else {
      resolve(false);
    }
  });
};

const sessionValid = async function () {
  const session = await getUserSession();
  if (session) {
    return session.isValid();
  } else {
    return false;
  }
};

const getToken = async function () {
  const session = await getUserSession();
  if (session) {
    const token = await session.getIdToken().getJwtToken();
    return token;
  } else {
    return false;
  }
};

export { UserPool, getUserSession, getToken, sessionValid };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, Vue, store }) => {
  //   Vue.prototype.$up = UserPool;
  //   Vue.prototype.$token = getToken;
  //   const user = UserPool.getCurrentUser();
  //   if (user) {
  //    await user.getSession(async (err, res) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         const token = await res.getIdToken().getJwtToken();
  //         const {data} = await axios.get(`${process.env.API}/admin/users/current`,
  //           {headers: { Authorization: token }});
  //         const valid = await res.isValid();
  //         store.commit('app/setAuthenticated', valid);
  //         store.commit('app/updateUserData', data);
  //       }
  //     });
  //   }
});
