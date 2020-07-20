<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
    >
      <!--<q-toolbar
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
          <img
            alt="Quasar logo"
            height="100"
            src="~assets/imgs/logo-yakuza.png"
          >
        </q-toolbar-title>

        <q-tabs
          v-model="tab"
          dense
        >
          <q-tab
            v-for="t of tabs"
            :key="t.id"
            :name="t.id"
            :label="t.label"
          />
        </q-tabs>
      </q-toolbar>-->
    </q-header>

    <!--<q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-secondary"
    >-

    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  mata: {
    title: 'Yakuza Sushi'
  },

  data: () => ({
    tab: '',
    tabs: [
      {
        id: 'combos',
        label: 'Combinados'
      },
      {
        id: 'duplas',
        label: 'Duplas'
      },
      {
        id: 'makis',
        label: 'Makisushis'
      },
      {
        id: 'quentes',
        label: 'Especialidades quentes'
      },
      {
        id: 'bebidas',
        label: 'Bebidas'
      },
      {
        id: 'contato',
        label: 'Contato'
      }
    ],
    leftDrawerOpen: false
  })
}
</script>
