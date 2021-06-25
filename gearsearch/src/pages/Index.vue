<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="!loading && !searchResults.length">
      <h1>Search for something</h1>

      <q-input
        rounded
        outlined
        v-model="searchTerm"
        placeholder="Search"
        v-on:keyup.enter="enterClicked"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append
          ><q-icon
            v-if="searchTerm !== ''"
            name="clear"
            class="cursor-pointer"
            @click="searchTerm = ''"
          />
          <div>|</div>
          <q-btn icon="search" unelevated v-on:click="enterClicked" />
        </template>
      </q-input>
    </div>
    <div v-else>
      <h1 v-if="loading">Loading...</h1>
      <div v-else>
        <div class="q-pa-md" style="height: 100vh; width: 100vw">
          <q-card>
            <q-tabs
              v-model="tab"
              class="text-grey"
              active-color="secondary"
              indicator-color="secondary"
              align="justify"
            >
              <q-tab name="summary" label="resumen" />
              <q-tab name="web" label="EnLaWeb" />
              <q-tab name="shop" label="Shopping" />
              <q-tab name="videos" label="Videos" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="summary" class="thePanel">
                <div class="text-h6">Resumen</div>
                <ul>
                  <li v-for="t in searchResultsLimited" :key="t.id">
                    {{ t.title }}
                  </li>
                </ul>
                <q-list bordered>
                  <q-item
                    v-for="t in shopLimited"
                    :key="t.id"
                    clickable
                    v-ripple
                  >
                    <q-item-section>
                      <q-item-label>{{ t.title }}</q-item-label>
                      <q-item-label caption lines="2">{{
                        t.description
                      }}</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>{{ t.price }}</q-item-label>
                      <q-icon name="star" color="yellow" />
                    </q-item-section>
                    <q-item-section>{{ t.store_name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="web" class="the-panel">
                <div class="text-h6">Mails</div>
                <ul>
                  <li v-for="t in searchResults" :key="t.id">
                    {{ t.title }}
                  </li>
                </ul>
              </q-tab-panel>

              <q-tab-panel name="shop" class="the-panel">
                <div class="text-h6">Alarms</div>
                <ShopCard :items="shopResults"/>
                
              </q-tab-panel>

              <q-tab-panel name="videos">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import useStore from "../store/useStore";
import ShopCard from "../components/ShopCard"
export default defineComponent({
  name: "PageIndex",
  components: {
    ShopCard,
  },
  setup() {
    const { searchResults, shopResults, loading, searchIt, searchTerm } =
      useStore();
    return {
      tab: ref("summary"),
      searchResults,
      shopResults,
      searchTerm,
      loading,
      enterClicked() {
        searchIt();
      },
    };
  },
});
</script>

<style scoped>
.thePanel {
  height: calc(100vh - 84px);
}
</style>