<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderDrawer from "components/HeaderDrawer.vue";

export default defineComponent({
  name: "Catalog",
  components: {
    HeaderDrawer,
  },
  setup() {},
});
</script>
