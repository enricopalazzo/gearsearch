<template>
  <div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
    <q-card class="grid-item no-border-radius"
      v-for="card of items"
      :key="card.id"
    >
      <q-card-section>
        <div class="text-caption text-blue" v-if="!!card.url">{{card.url}}</div>
        <div class="text-h6" v-if="!!card.title">{{card.title}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{card.snippet.replace(/(<([^>]+)>)/gi, "")}}</q-card-section>
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
};
</script>

<style scoped>
.grid-item {
  max-width: 32%;
}
</style>