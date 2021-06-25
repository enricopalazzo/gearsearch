<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center no-wrap">
          <img style="filter: invert(100%); width:80px; margin-right:15px;" src="~assets/img_562591.png" />
          Gear Search
        </q-toolbar-title>

        <q-space />
        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-primary"
          v-model="searchTerm"
          placeholder="Search"
          v-on:keyup.enter="enterClicked"
          v-if="searchResults.length"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>
        <q-btn
          class="YL__toolbar-input-btn"
          color="grey-3"
          text-color="grey-8"
          icon="search"
          unelevated
          v-on:click="enterClicked"
          v-if="searchResults.length"
        />
         <q-btn
          class="YL__toolbar-input-btn"
          text-color="white"
          icon="save"
          label="Save this search"
          unelevated
          v-on:click="saveSearchClicked"
          v-if="searchResults.length"
        />
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

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      elevated
      :width="250"
      :breakpoint="500"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list" style="padding-top: 40px">
          <SavedSearchsMenu />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="youtube_searched_for" />
            </q-item-section>

            <q-item-section> Search history </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section> Help & Feedback </q-item-section>
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
   SavedSearchsMenu
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const { searchIt, searchTerm, searchResults, saveSearch, savedSearchs } = useStore();
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
      }
    };
  },
};
</script>

<style lang="sass">
.GPL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 35%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      padding-left: 12px
      .q-icon
        color: #5f6368
    .q-item__label:not(.q-item__label--caption)
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
    &--storage
      border-radius: 0
      margin-right: 0
      padding-top: 24px
      padding-bottom: 24px
  &__side-btn
    &__label
      font-size: 12px
      line-height: 24px
      letter-spacing: .01785714em
      font-weight: 500
  @media (min-width: 1024px)
    &__page-container
      padding-left: 94px
</style>