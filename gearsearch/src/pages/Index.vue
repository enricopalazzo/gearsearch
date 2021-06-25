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
        <template v-slot:append>
          <q-icon
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
        <div class="q-pa-md" style="height: 90vh; width: 100vw">
          <q-tabs
            v-model="tab"
            align="justify"
            class="tabMenu shadow-4 custom-tab"
          >
            <q-tab name="summary" label="resumen" class="text-purple-5 bold" />
            <q-tab name="web" label="EnLaWeb" class="text-cyan-6 bold" />
            <q-tab name="shop" label="Shopping" class="text-yellow-8 bold" />
            <q-tab
              name="videos"
              label="Videos"
              class="text-deep-orange-7 bold"
            />
          </q-tabs>
          <q-separator />

          <q-tab-panels v-model="tab" animated class="q-mt-xl">
            <q-tab-panel name="summary" class="thePanel">
              <div class="text-h6">Resumen</div>
              <hr>
              <ul>
                <li v-for="t in searchResultsLimited" :key="t.id">
                  {{ t.title }}
                </li>
              </ul>
              <q-list bordered>
                <q-item v-for="t in shopLimited" :key="t.id" clickable v-ripple>
                  <q-item-section>
                    <q-item-label>{{ t.title }}</q-item-label>
                    <q-item-label caption lines="2">
                      {{ t.description }}
                    </q-item-label>
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
              <hr>
              <WebResultsCards :items="searchResults" />
            </q-tab-panel>

            <q-tab-panel name="shop" class="the-panel">
              <div class="text-h6">Compare prices</div>
              <hr>
              <ShopCard :items="shopResults" />
            </q-tab-panel>

            <q-tab-panel name="videos">
              <div class="text-h6">Movies</div>
              <hr>
              <VideoCards :items="videoResults" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import useStore from "../store/useStore";
import ShopCard from "../components/ShopCard";
import VideoCards from "../components/VideoCards";
import WebResultsCards from "../components/WebResultsCards";
export default defineComponent({
  name: "PageIndex",
  components: {
    ShopCard,
    VideoCards,
    WebResultsCards,
  },
  setup() {
    const {
      searchResults,
      shopResults,
      videoResults,
      loading,
      searchIt,
      searchTerm,
    } = useStore();
    return {
      tab: ref("summary"),
      searchResults,
      shopResults,
      videoResults,
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
.tabMenu {
      position: fixed;
    top: 72px;
    z-index: 100;
    background: white;
    width: 100%;
    margin-left: -10px;
}
.thePanel {
  height: calc(100vh - 84px);
}
.bold {
  font-weight: 500;
}
.custom-tab {
    font-size: 18pt;
  }

 .q-tab__label {
    font-weight: 600;
  }
 
</style>