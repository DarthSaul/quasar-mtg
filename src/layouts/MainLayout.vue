<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderDrawer from "components/HeaderDrawer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    HeaderDrawer,
  },

  setup() {},
});
</script>
