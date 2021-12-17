<template>
  <q-header elevated>
    <q-toolbar class="bg-secondary text-black q-py-md">
      <q-btn
        flat
        dense
        round
        color="black"
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title> Quasar MTG App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <template v-if="authenticated">
        <EssentialLink
          v-for="link in authLinks"
          :key="link.title"
          v-bind="link"
        />
      </template>
      <template v-else>
        <EssentialLink
          v-for="link in noAuthLinks"
          :key="link.title"
          v-bind="link"
        />
      </template>
    </q-list>
  </q-drawer>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

import { defineComponent, ref } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  computed: {
    ...mapState("app/", {
      authenticated: (state) => state.authenticated,
    }),
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      authLinks: [
        {
          title: "Catalog",
          caption: "Everything MTG!",
          icon: "menu_book",
          link: "/#/catalog",
        },
        {
          title: "Sign Out",
          caption: "Sign out of the app",
          icon: "logout",
          link: "/#/signout",
        },
      ],
      noAuthLinks: [
        {
          title: "Register",
          caption: "Let's get started!",
          icon: "account_circle",
          link: "/#/register",
        },
        {
          title: "Login",
          caption: "Login to the app",
          icon: "login",
          link: "/#/login",
        },
      ],
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
