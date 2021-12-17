<template>
  <q-page class="flex column items-center q-mt-lg q-px-lg">
    <q-btn to="/catalog" class="self-start bg-accent text-white q-px-md">
      <q-icon name="menu_book" class="q-mr-md" />
      Catalog
    </q-btn>

    <h1>Types</h1>
    <div class="row justify-evenly q-gutter-xs q-px-lg">
      <q-card
        v-for="(type, ind) in types"
        :key="ind"
        clickable
        v-ripple
        class="col-5 q-mb-lg q-pa-md cursor-pointer"
      >
        <q-card-section>
          <div class="text-h5">{{ type }}</div>
          <div class="text-body1">More info</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("catalog/getAllTypes");
  },
  computed: {
    ...mapGetters("catalog/", { types: "getTypes" }),
  },
};
</script>

<style scoped></style>
