<template>
  <q-expansion-item
    v-model="expanded"
    icon="saved_search"
    label="Saved searches"
  >
    <div style="max-height: 300px; overflow-y: auto">
      <q-list padding class="menu-list">
        <q-item
          clickable
          v-ripple
          v-for="item of savedSearchs"
          :key="item.term"
        >
          <q-item-section
            >{{ item.term }}
            <div class="date">Saved: {{ fomatDate(item.date) }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-expansion-item>
</template>

<script>
import { ref } from "vue";
import useStore from "../store/useStore";
export default {
  setup() {
    const { savedSearchs } = useStore();
    return {
      expanded: ref(false),
      savedSearchs,
      fomatDate(dateString) {
        const searchDate = new Date(dateString);
        return searchDate.toDateString();
      },
    };
  },
};
</script>

<style>
.date {
  font-size: 12px;
  color: gray;
}
</style>