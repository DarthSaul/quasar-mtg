<template>
  <q-page class="flex column items-center q-mt-xl">
    <h1>Catalog</h1>
    <div class="row justify-between q-gutter-md">
      <q-btn
        size="xl"
        label="Cards"
        to="/catalog/cards"
        class="col bg-accent text-white q-px-xl"
      />
      <q-btn
        size="xl"
        label="Sets"
        to="/catalog/sets"
        class="col bg-accent text-white q-px-xl"
      />
      <q-btn
        size="xl"
        label="Types"
        to="/catalog/types"
        class="col bg-accent text-white q-px-xl"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
