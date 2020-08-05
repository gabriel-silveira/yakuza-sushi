<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar
        v-if="isMobile"
        class="bg-secondary"
      >
        <q-btn
          flat
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="text-center">
          <img
            src="/imgs/logo-yakuza-transp-header.png"
            style="width:90px;height:30px;margin-top:11px"
            @click="$router.push({ name: ROUTES.HOME })"
          />
        </q-toolbar-title>
        <div style="width: 40px" />
      </q-toolbar>

      <q-toolbar
        v-else
        class="bg-secondary"
      >
        <main-menu
          @show-horario-dialog="horarioDialog = !horarioDialog"
        />

        <q-toolbar-title class="text-center" />

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
        <div
          class="q-pr-sm text-h6"
        >
          <i class="las la-phone"></i>
        </div>
        <div
          class="q-pr-md text-h6"
        >
          2372-5893
        </div>
        <div
          class="q-pr-sm text-h6"
        >
          <i class="lab la-whatsapp"></i>
        </div>
        <div
          class="q-pr-xs text-h6"
        >
          94575-0784
        </div>
      </q-toolbar>
      <div
        v-if="isMobile"
        class="bg-black q-pl-md q-pt-sm q-pb-sm text-body1 text-center"
      >
        Delivery 24h - <i class="las la-phone"></i> 2372-5893 - <i class="lab la-whatsapp"></i> 94575-0784
      </div>
    </q-header>

    <q-drawer
      v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-secondary"
    >
      <main-menu-mobile
        @show-horario-dialog="showHorarioMobile"
      />
    </q-drawer>

    <q-page-container>
      <router-view />

      <q-dialog
        v-model="horarioDialog"
      >
        <q-card
          style="width: 450px"
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
              class="text-caption q-ma-none q-pb-sm"
            >
              {{ unit.address }}
            </p>
            <p
              v-for="oh of unit.openingHours"
              :key="oh.text"
              class="q-pa-none q-mt-xs q-mb-xs"
            >
              <q-avatar
                class="q-pl-none q-ml-none q-mr-sm"
                text-color="white"
                icon="las la-angle-right"
                size="24px"
                style="width:auto"
                flat
              />{{ oh.text }}
            </p>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import units from 'src/services/units'
import ROUTES from 'src/constants/routes'

export default {
  name: 'MainLayout',

  meta: {
    title: 'Yakuza Sushi'
  },

  components: {
    MainMenu: () => import('src/components/menus/main-menu'),
    MainMenuMobile: () => import('src/components/menus/main-menu-mobile')
  },

  data: () => ({
    ROUTES,
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

  computed: {
    isMobile () {
      return this.$q.platform.is.mobile
    }
  },

  beforeMount () {
    this.$root.$on('set-page-title', (title) => { this.pageTitle = title })
  },

  methods: {
    showHorarioMobile () {
      this.horarioDialog = !this.horarioDialog
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
