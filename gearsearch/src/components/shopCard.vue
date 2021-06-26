<template>
  <div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
    <q-card class="grid-item no-border-radius col-12 col-md-3" v-for="card of items" :key="card.url">
      <q-card-section>
        <div class="text-h6">
          <a :href="card.url">{{card.title}}</a>
        </div>
        <div class="text-subtitle2">
          <a :href="card.url">{{card.store_name}}</a>
        </div>
        <div class="row no-wrap items-center">
          <Rating :itemData="card" />
          <span class="text-caption text-grey q-ml-sm">{{card.rating}} {{card.reviews}}</span>
        </div>
        <q-chip size="18px" icon="attach_money" color="teal">{{card.price}}</q-chip>
      </q-card-section>

      <q-card-section class="q-pt-none">{{ card.description }}</q-card-section>
    </q-card>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
export default {
  components: {
    Rating,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.price {
  font-size: 24px;
  text-align: right;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}

.grid-item {
  /*max-width: 32%;*/
}
</style>