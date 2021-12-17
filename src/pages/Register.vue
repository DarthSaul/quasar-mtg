<template>
  <q-page class="flex flex-center">
    <q-card class="login-form">
      <q-banner class="bg-primary text-center q-py-lg q-mb-md">
        <div class="text-h4">Register</div>
      </q-banner>

      <q-form
        v-if="view == 'register'"
        @submit.prevent="register"
        class="q-gutter-md q-pa-md"
      >
        <q-input filled type="email" v-model="email" label="Email *" />
        <q-input filled type="password" v-model="password" label="Password *" />
        <q-input
          filled
          v-model="phone"
          label="Telephone Number *"
          mask="(###) ### - ####"
          :rules="[(val) => !!val || 'Phone number is required']"
        />
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="accent"
            size="lg"
            class="q-mt-none q-mb-md q-px-lg"
          />
        </div>
      </q-form>

      <q-form
        v-else-if="view == 'confirm'"
        @submit.prevent="confirm"
        class="q-gutter-md q-pa-md"
      >
        <q-input v-model="code" label="Confirmation code" />
        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="accent"
            size="lg"
            class="q-my-lg q-px-lg"
          />
        </div>
      </q-form>

      <q-card-section
        v-else-if="view == 'success'"
        class="text-body1 q-my-lg q-px-lg"
      >
        Thanks for verifying your email! Please
        <router-link to="/login">return to login</router-link> to enter the app.
      </q-card-section>
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
      phone: "",
      view: "register",
      code: "",
    };
  },
  methods: {
    formatPhone(phoneNum) {
      let updatedNum = phoneNum.replace(/[^0-9]/gi, "");
      return "+1" + updatedNum;
    },
    register() {
      const credentials = {
        Email: this.email,
        Password: this.password,
        phone_number: this.formatPhone(this.phone),
      };
      this.$store
        .dispatch("app/register", credentials)
        .then((res) => {
          if (res === true) {
            this.$q.notify({
              message: "Registration Successful.",
              color: "accent",
              position: "top",
            });
            this.view = "confirm";
          }
        })
        .catch((err) => {
          this.$q.notify({
            message: err.message,
            color: "negative",
            position: "top",
          });
        });
    },
    confirm() {
      const credentials = {
        Email: this.email,
        Code: this.code,
      };
      this.$store
        .dispatch("app/confirm", credentials)
        .then((res) => {
          if (res === "SUCCESS") {
            this.$q.notify({
              message: "Email verified.",
              color: "accent",
              position: "top",
            });
            this.view = "success";
          }
        })
        .catch((err) => {
          this.$q.notify({
            message: err.message,
            color: "negative",
          });
        });
    },
  },
};
</script>
