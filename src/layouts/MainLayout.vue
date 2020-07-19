<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
      elevated
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <img
            alt="Quasar logo"
            height="100"
            src="~assets/imgs/logo-yakuza.png"
          >
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Home" />
          <q-tab name="tab2" label="Combinados" />
          <q-tab name="tab3" label="Duplas" />
          <q-tab name="tab4" label="Makisushis" />
          <q-tab name="tab5" label="Especialidades quentes" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-secondary"
    >

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data: () => ({
    tab: 'tab1',
    leftDrawerOpen: false
  })
}
</script>
