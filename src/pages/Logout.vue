<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logout",
  created() {
    this.$store.dispatch("app/signout");
    this.$q.notify({
      message: "You've been logged out, redirecting to login.",
      color: "accent",
      position: "top",
    });
  },
});
</script>
