<template>
  <q-page class="flex q-pa-none">
    <q-splitter
      v-model="splitterModel"
      class="full-width"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
        >
          <q-tab
            v-for="category of categories"
            :key="`tab-${category.id}`"
            :name="`tab-${category.id}`"
            :label="category.name"
          />
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
          class="q-pb-xl"
        >
          <q-tab-panel
            v-for="category of categories"
            :key="`tab-${category.id}`"
            :name="`tab-${category.id}`"
          >
            <div class="text-h4 q-mb-md">{{ category.name }}</div>
            <div class="row q-col-gutter-lg">
              <div
                v-for="product of products[category.id]"
                :key="`product-${product.id}`"
                class="col-12 col-md-3"
              >
                <product-card
                  :product-data="product"
                  :can-add-to-order="canAddToOrder"
                  :can-review="canReview"
                />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>
import products from 'src/services/products'

export default {
  name: 'CardapioPage',
  components: {
    ProductCard: () => import('src/components/menus/product-card')
  },
  data: () => ({
    canAddToOrder: true,
    canReview: true,
    tab: 'tab-1',
    splitterModel: 10,
    products: products.products,
    categories: products.categories
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
