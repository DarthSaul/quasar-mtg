<template>
  <q-page class="flex flex-center">
    <q-card class="login-form">
      <q-banner class="bg-primary text-center q-py-lg q-mb-md">
        <div class="text-h4">Login</div>
      </q-banner>
      <q-form @submit.prevent="login" class="q-gutter-md q-pa-md">
        <q-input filled v-model="email" label="Email" />
        <q-input filled type="password" v-model="password" label="Password" />
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="accent"
            size="lg"
            class="q-my-sm"
          />
        </div>
      </q-form>
      <q-card-section class="q-mt-none">
        Don't have an account? Please
        <router-link to="/register">register here</router-link>.
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Attempting log in...");
    },
  },
};
</script>
