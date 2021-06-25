<template>
<div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
  <q-card class="grid-item" v-for="card of items" :key="card.url">

      <q-card-section>
        <div class="text-h6"><a :href=card.url> {{card.title}}</a></div>
        <div class="text-subtitle2"><a :href=card.url>{{card.store_name}}</a>
        </div>
      </q-card-section>
    
      <q-card-section class="q-pt-none">
        {{ card.description }}
      </q-card-section>
    </q-card>

</div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeProduct(prodId) {
      this.remove(prodId);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
max-width: 32%;
}
</style>