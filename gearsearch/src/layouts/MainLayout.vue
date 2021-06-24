<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="row items-center no-wrap">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>Title
        </q-toolbar-title>

        <q-space />
        <q-input
          class="GPL__toolbar-input"
          dense
          standout="bg-primary"
          v-model="search"
          placeholder="Search"
          v-on:keyup.enter="enterClicked"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>
        <q-btn
          class="YL__toolbar-input-btn"
          color="grey-3"
          text-color="grey-8"
          icon="search"
          unelevated
          v-on:click="enterClicked"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import useStore from "../store/useStore";
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const { searchIt } = useStore();
    return {
      leftDrawerOpen,
      search,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      enterClicked() {
        searchIt();
      },
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