<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar
        class="bg-secondary"
      >
        <q-btn
          v-if="$q.platform.is.mobile"
          color="yellow"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <main-menu
          v-else
        />

        <q-toolbar-title class="text-center">
          <h3 class="text-yellow q-ma-none q-pt-sm q-pb-xs">{{ pageTitle }}</h3>
        </q-toolbar-title>

        <div
          class="q-mr-md"
          style="font-size:24px"
        >
          24h <i class="las la-history"></i>
        </div>
        <div
          class="text-yellow q-mr-md"
        >
          Vila Mariana, Aclimação e Região
        </div>
        <div>
          (11) 2372-5893 / 94575-0784
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-secondary"
    >
      Main menu mobile
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  meta: {
    title: 'Yakuza Sushi'
  },

  components: {
    MainMenu: () => import('src/components/menus/main-menu')
  },

  data: () => ({
    pageTitle: '',
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
  }),
  beforeMount () {
    this.$root.$on('set-page-title', (title) => { this.pageTitle = title })
  }
}
</script>
