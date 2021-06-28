<template>
  <div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
    <q-card
      class="grid-item col-md-3 col-sm-6 col-xs-12 no-border-radius"
      :class="[isHome ? 'full-width ' : '']"
      style=" flex-grow: 1;"
      v-for="card of items"
      :key="card.url"
    >
      <img
        :src="'https://picsum.photos/id/'+Math.floor(Math.random() * 500+1)+'/1200/600'"
        class="float-left q-mb-lg"
      />
      <q-card-section>
        <div class="text-h6">
          <a :href="card.url" target="_blank">{{card.title}}</a>
        </div>
        <div class="text-subtitle2">
          <a :href="card.store_url" target="_blank">{{card.store_name}}</a>
        </div>
        <div class="row no-wrap items-center">
          <Rating :itemData="card" />
          <span class="text-caption text-grey q-ml-sm">{{card.rating}} {{card.reviews}}</span>
        </div>

        <div style="height:50px;">
          <q-chip
            size="18px"
            icon="attach_money"
            color="negative"
            text-color="white"
            class="float-right q-mb-lg"
          >{{card.price}}</q-chip>
        </div>
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
    isHome: {
      type: Boolean,
      required: false,
    },
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