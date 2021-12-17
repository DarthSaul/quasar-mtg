<template>
  <q-page class="flex column items-center q-mt-lg q-px-lg">
    <q-btn to="/catalog" class="self-start bg-accent text-white q-px-md">
      <q-icon name="menu_book" class="q-mr-md" />
      Catalog
    </q-btn>

    <h1>Cards</h1>
    <div v-if="cards" class="row justify-center q-px-md">
      <q-card
        v-for="(card, ind) in cards"
        :key="ind"
        clickable
        v-ripple
        class="
          col-12 col-md-5
          q-ma-md q-pa-md
          bg-primary
          rounded-borders
          row
          justify-between
          items-center
        "
      >
        <q-card-section class="col-7">
          <div class="text-h6">{{ card.name }}</div>
          <div class="text-body1 text-grey-8">{{ card.type }}</div>
          <div>{{ card.text }}</div>
        </q-card-section>
        <q-card-section class="col-5 text-right">
          <img v-if="card.imageUrl" :src="card.imageUrl" />
          <img
            v-else
            src="https://images.unsplash.com/photo-1593814681464-eef5af2b0628"
            class="no-img"
          />
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
    this.$store.dispatch("catalog/getAllCards");
  },
  computed: {
    ...mapGetters("catalog/", { cards: "getCards" }),
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.no-img {
  opacity: 0.75;
}
</style>
