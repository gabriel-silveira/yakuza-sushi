<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
      elevated
    >
      <q-toolbar
        class="bg-dark"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          LOGO SOMENTE TIPOGRAFIA
          <!--<img
            alt="Quasar logo"
            height="100"
            src="~assets/imgs/logo-yakuza.png"
          >-->
        </q-toolbar-title>

        <q-tabs
          v-model="tab"
          shrink
        >
          <q-tab name="combos" label="Combinados" />
          <q-tab name="duplas" label="Duplas" />
          <q-tab name="makis" label="Makisushis" />
          <q-tab name="quentes" label="Especialidades quentes" />
          <q-tab name="bebidas" label="Bebidas" />
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
    tab: '',
    leftDrawerOpen: false
  })
}
</script>
