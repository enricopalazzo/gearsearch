<template>
  <div id="parent" class="fit row wrap justify-center items-start content-start q-gutter-md">
    <q-card class="grid-item col-md-3 col-sm-6 col-xs-12  no-border-radius " style=" flex-grow: 1;" v-for="card of items" :key="card.id" >
      <div v-if="!!card.snippet" class="">
        <div v-if="!!card.snippet.thumbnails.high">
          <img :src="card.snippet.thumbnails.high.url" style="max-width:100%" />
        </div>
        <q-card-section>
          <div class="text-h6" v-if="!!card.snippet.title">{{card.snippet.title}}</div>
          <div
            class="text-caption text-grey"
            v-if="!!card.snippet.channelTitle"
          >{{card.snippet.channelTitle}}</div>
          <div class="row no-wrap">
            <div class="text-caption text-grey">{{card.snippet.publishedAt}}</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">{{ card.description }}</q-card-section>
      </div>
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
 
}
</style>