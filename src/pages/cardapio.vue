<template>
  <q-page class="q-pa-none">
    <q-splitter
      v-model="splitterModel"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
        >
          <q-tab name="tab-1" label="Combinados" />
          <q-separator dark />
          <q-tab name="tab-2" label="Duplas" />
          <q-separator dark />
          <q-tab name="tab-3" label="Makisushis" />
          <q-separator dark />
          <q-tab name="tab-4" label="Almoço e jantar" />
          <q-separator dark />
          <q-tab name="tab-5" label="Bebidas" />
          <q-separator dark />
          <q-tab name="tab-6" label="Rodízio especial" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="tab-1">
            <div class="text-h4 q-mb-md">Combinados</div>
            <div class="row q-col-gutter-lg">
              <div
                v-for="item of 5"
                :key="`product-${item}`"
                class="col-3"
              >
                <product-card
                  :product-data="combo1"
                />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="tab-2">
            <div class="text-h4 q-mb-md">Duplas</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="tab-3">
            <div class="text-h4 q-mb-md">Makisushis</div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>
export default {
  name: 'CardapioPage',
  components: {
    ProductCard: () => import('src/components/menus/product-card')
  },
  data: () => ({
    tab: 'tab-1',
    splitterModel: 10,
    combo1: {
      name: 'Combinado para 1 pessoa',
      description: '6 sashimis, 4 sushis, 2 jhous, 2 kappas, 2 uramakis Califórnia e 2 salmonmakis',
      price: 'R$ 33,90',
      rate: 4,
      quantity: '18 unidades'
    }
  }),
  mounted () {
    this.$root.$emit('set-page-title', 'Cardapio')
  }
}
</script>

<style>
.q-btn--fab.q-btn__wrapper {
  padding: 0 !important;
}
.q-btn--fab {
  width: 44px;
  height: 44px;
}
</style>
