<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title shrink class="row items-center no-wrap gt-xs">
          <img
            style="filter: invert(100%); width:80px; margin-right:15px;"
            src="~assets/img_562591.png"
          />
          <span class="gt-sm">Gear Search</span>
        </q-toolbar-title>
        <q-space />
        <q-input
        v-if="searchTerm"
        class="bg-white text-primary col-6"
          dense
          outlined
          color="primary"
          v-model="searchTerm"
          placeholder="Search for your"
          v-on:keyup.enter="enterClicked"
          
        >
          <template v-slot:append>
            <q-icon
              v-if="searchTerm !== ''"
              name="clear"
              class="cursor-pointer"
              @click="searchTerm = ''"
            />
            <div>|</div>
            <q-btn dense rounded icon="search" unelevated v-on:click="enterClicked" />
          </template>
        </q-input>
        
        <q-btn
          text-color="white"
          icon="save"
          unelevated
          v-on:click="saveSearchClicked"
          v-if="searchResults && searchResults.length"
        >
        <span class="gt-sm q-ml-sm">Save this search</span>
        </q-btn>
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated :width="250" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list" style="padding-top: 40px">
          <SavedSearchsMenu />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="youtube_searched_for" />
            </q-item-section>

            <q-item-section>Search history</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>Settings</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>Help & Feedback</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import useStore from "../store/useStore";
import SavedSearchsMenu from "../components/SavedSearchsMenu";
export default {
  components: {
    SavedSearchsMenu,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const { searchIt, searchTerm, searchResults, saveSearch, savedSearchs } =
      useStore();
    return {
      leftDrawerOpen,
      search,
      searchTerm,
      searchResults,
      savedSearchs,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      enterClicked() {
        searchIt();
      },
      saveSearchClicked() {
        saveSearch();
      },
    };
  },
};
</script>

