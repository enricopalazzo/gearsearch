<template>
  <div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
    <q-card
      class="grid-item col-md-3 col-sm-6 col-xs-12 no-border-radius" 
     :class="[isHome ? 'full-width ' : '']"
      style=" flex-grow: 1;"
      v-for="card of items"
      :key="card.id"
    >
      <q-card-section>
        <div class="text-h6" v-if="!!card.title">{{card.title}}</div>
        <div class="text-caption text-blue" v-if="!!card.url">
          <a :href="card.url" target="_blank" class="link">{{card.url}}</a>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{card.snippet.replace(/(<([^>]+)>)/gi, "")}}</q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
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
.link {
  word-break: break-all;
}
</style>