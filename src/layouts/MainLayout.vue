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
          @show-horario-dialog="horarioDialog = !horarioDialog"
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
        <div class="q-pr-sm text-h6">
          <i class="las la-phone"></i>
        </div>
        <div class="q-pr-md text-h6">
          2372-5893
        </div>
        <div class="q-pr-sm text-h6">
          <i class="lab la-whatsapp"></i>
        </div>
        <div class="q-pr-xs text-h6">
          94575-0784
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

      <q-dialog
        v-model="horarioDialog"
      >
        <q-card
          style="width: 400px"
          class="q-pb-md"
        >
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Horários de funcionamento</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section
            v-for="unit of units"
            :key="unit.id"
            class="q-ml-md q-mr-md q-mt-md q-pb-xs"
            rounded
            style="border-top:1px solid rgba(255,255,255,0.1)"
          >
            <h5 class="q-ma-none text-yellow">{{ unit.name }}</h5>
            <p
              v-if="unit.address"
              class="text-caption q-ma-none"
            >
              {{ unit.address }}
            </p>
            <p
              v-for="oh of unit.openingHours"
              :key="oh.text"
              class="q-pa-none q-mt-xs q-mb-xs"
            >
              {{ oh.text }}
            </p>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import units from 'src/services/units'

export default {
  name: 'MainLayout',

  meta: {
    title: 'Yakuza Sushi'
  },

  components: {
    MainMenu: () => import('src/components/menus/main-menu')
  },

  data: () => ({
    horarioDialog: false,
    units: units,
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
