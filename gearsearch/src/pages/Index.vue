<template>
  <q-page class="row items-center justify-evenly">
    <h1 v-if="loading">Loading...</h1>
    <div v-else>
      <div class="q-pa-xl">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="summary" label="resumen" />
              <q-tab name="web" label="EnLaWeb" />
              <q-tab name="shop" label="Shopping" />
              <q-tab name="videos" label="Videos" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="summary">
                <div class="text-h6">Resumen</div>
                <ul>
                  <li v-for="t in searchResultsLimited" :key="t.id">{{t.title}}</li>
                </ul>
                <q-list bordered>
                  <q-item v-for="t in shopLimited" :key="t.id" clickable v-ripple>
                    <q-item-section>
                      <q-item-label>{{t.title}}</q-item-label>
                      <q-item-label caption lines="2">{{t.description}}</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>{{t.price}}</q-item-label>
                      <q-icon name="star" color="yellow" />
                    </q-item-section>
                    <q-item-section>{{t.store_name}}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
              <q-tab-panel name="web">
                <div class="text-h6">Mails</div>
                <ul>
                  <li v-for="t in searchResults" :key="t.id">{{t.title}}</li>
                </ul>
              </q-tab-panel>

              <q-tab-panel name="shop">
                <div class="text-h6">Alarms</div>
                <q-list bordered>
                  <q-item v-for="t in shopResults" :key="t.id" clickable v-ripple>
                    <q-item-section>
                      <q-item-label>{{t.title}}</q-item-label>
                      <q-item-label caption lines="2">{{t.description}}</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>{{t.price}}</q-item-label>
                      <q-icon name="star" color="yellow" />
                    </q-item-section>
                    <q-item-section>{{t.store_name}}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>

              <q-tab-panel name="videos">
                <div class="text-h6">Movies</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
export default defineComponent({
  name: "PageIndex",
  setup() {
    const { searchResults, shopResults, loading } = useStore();
    return {
      tab: ref("summary"),
      searchResults,
      shopResults,
      loading,
    };
  },
});
</script>
