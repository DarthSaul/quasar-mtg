<template>
  <q-page class="flex column items-center q-mt-lg q-px-lg">
    <q-btn to="/catalog" class="self-start bg-accent text-white q-px-md">
      <q-icon name="menu_book" class="q-mr-md" />
      Catalog
    </q-btn>

    <h1>Sets</h1>
    <div v-if="sets" class="row justify-evenly q-gutter-md q-px-lg">
      <q-card
        v-for="(set, ind) in sets"
        :key="ind"
        clickable
        v-ripple
        class="col-12 col-md-5 q-mb-md q-pa-md cursor-pointer"
      >
        <q-card-section>
          <div class="text-h5">{{ set.name }}</div>
          <div class="text-body1">{{ set.code }}</div>
        </q-card-section>

        <q-card-section>
          <q-badge class="text-body1" color="accent" :label="set.releaseDate" />
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
    this.$store.dispatch("catalog/getAllSets");
  },
  computed: {
    ...mapGetters("catalog/", { sets: "getSets" }),
  },
};
</script>

<style scoped></style>
