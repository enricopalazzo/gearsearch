<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="!loading && !searchResults.length">
      <h1>Search for something</h1>
      <q-input
        rounded
        outlined
        v-model="searchTerm"
        placeholder="Search for your gear"
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
          <q-tabs v-model="tab" align="justify" class="tabMenu shadow-4 custom-tab">
            <q-tab name="summary" label="Quick View" class="text-purple-5 bold" />
            <q-tab name="web" label="From the Web" class="text-cyan-6 bold" />
            <q-tab name="shop" label="Compare prices" class="text-yellow-8 bold" />
            <q-tab name="videos" label="Videos" class="text-deep-orange-7 bold" />
          </q-tabs>
          <q-separator />

          <q-tab-panels v-model="tab" animated class="q-mt-xl">
            <q-tab-panel name="summary" class="thePanel">
              <div class="row q-gutter-md">
                <div class="col">
                  <WebResultsCards :items="webTen" isHome="true"/>
                </div>
                <div class="col">
                  <ShopCard :items="shopTen" isHome="true"/>
                </div>
                <div class="col">
                  <VideoCards :items="videoTen" isHome="true"/>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="web" class="the-panel">
              <WebResultsCards :items="searchResults" />
            </q-tab-panel>

            <q-tab-panel name="shop" class="the-panel">
              <ShopCard :items="shopResults" />
            </q-tab-panel>

            <q-tab-panel name="videos">
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
  computed: {
    shopTen() {
      return this.shopResults.slice(0, 10);
    },
    webTen() {
      return this.searchResults.slice(0, 10);
    },
    videoTen() {
      return this.videoResults.slice(0, 10);
    },
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