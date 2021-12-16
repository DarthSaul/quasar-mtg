<template>
  <q-page class="flex flex-center">
    <q-card class="login-form">
      <q-banner class="bg-primary text-center q-py-lg q-mb-md">
        <div class="text-h4">Register</div>
      </q-banner>
      <q-form @submit.prevent="register" class="q-gutter-md q-pa-md">
        <q-input filled v-model="email" label="Email" />
        <q-input filled type="password" v-model="password" label="Password" />
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="accent"
            size="lg"
            class="q-my-lg"
          />
        </div>
      </q-form>
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
    register() {
      console.log("Attempting register...");
    },
  },
};
</script>
