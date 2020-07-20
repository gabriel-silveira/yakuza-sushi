<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-black"
    >
      <q-toolbar
        class="bg-secondary glossy"
      >
      <div class="q-gutter-sm row">
          <q-btn
            push
            @click="$router.push({ name: 'home' })"
          >
            <q-icon class="q-mr-sm" size="24px" name="las la-home" />
            <div>Início</div>
          </q-btn>

          <q-btn
            push
          >
            <q-icon class="q-mr-sm" size="24px" name="las la-bars" />
            <div>Cardápio</div>

            <q-menu
              content-class="bg-secondary"
              transition-show="flip-right"
              transition-hide="flip-left"
              auto-close
            >
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>Combinados</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Duplas</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Makisushis</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Almoço e Jantar</q-item-section>
                </q-item>
                <q-separator dark />
                <q-item clickable>
                  <q-item-section>Bebidas</q-item-section>
                </q-item>
                <q-separator dark />
                <q-item
                  clickable
                >
                  <q-item-section>Rodízio especial</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn
            push
          >
            <q-icon class="q-mr-sm" size="24px" name="las la-clock" />
            <div>Horários</div>
          </q-btn>

          <q-btn
            push
            @click="$router.push({ name: 'delivery' })"
          >
            <q-icon class="q-mr-sm" size="24px" name="las la-motorcycle" />
            <div>Delivery</div>
          </q-btn>
        </div>

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

        <q-toolbar-title />

        <div
          class="text-yellow q-mr-md"
        >
          Vila Mariana, Aclimação e Região
        </div>
        <div>
          (11) 2372-5893 / 94575-0784
        </div>
      </q-toolbar>
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
