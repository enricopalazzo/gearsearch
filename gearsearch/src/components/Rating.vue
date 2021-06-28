<template>
  <div>
    <q-rating
      v-model="ratingModel"
      size="2em"
      :max="5"
       readonly  
       color="yellow"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
    >
    </q-rating>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
   props: {
    itemData: {
      type: Array,
      required: true,
    },
  },
  setup () {
    return {
      ratingModel: ref(4)
    }
  }
}
</script>