<template>
  <q-page class="flex flex-center">
    <q-card class="login-form">
      <q-banner class="bg-primary text-center q-py-lg q-mb-md">
        <div class="text-h4">Login</div>
      </q-banner>

      <q-card-section v-if="authenticated" class="q-mt-none text-body1 q-mb-xs">
        You are logged in. Would you like to sign out?
      </q-card-section>

      <template v-else>
        <q-form @submit.prevent="login" class="q-gutter-md q-pa-md">
          <q-input filled v-model="email" label="Email" />
          <q-input filled type="password" v-model="password" label="Password" />
          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="accent"
              size="lg"
              class="q-my-sm q-px-lg"
            />
          </div>
        </q-form>
        <q-card-section class="q-mt-none text-body1 q-mb-xs">
          Don't have an account? Please
          <router-link to="/register">register here</router-link>.
        </q-card-section>
      </template>
    </q-card>
  </q-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const credentials = {
        Email: this.email,
        Password: this.password,
      };
      this.$store
        .dispatch("app/authenticate", credentials)
        .then((res) => {
          if (res === true) {
            this.$q.notify({
              message: "Welcome back!",
              color: "accent",
              position: "top",
            });
          }
        })
        .catch((err) => {
          this.$q.notify({
            message: err.message,
            color: "negative",
            position: "top",
          });
          if (err.name === "PasswordResetRequiredException") {
            let redirect = {
              path: "login/reset",
              query: this.$route.query,
            };
            this.$router.push(redirect);
          }
        });
    },
  },
  computed: {
    ...mapState("app/", {
      authenticated: (store) => store.authenticated,
    }),
  },
};
</script>
