<template>
  <q-page
    class="flex q-pa-none"
  >
    <div
      v-if="$q.platform.is.mobile"
      class="bg-dark q-pa-md full-width"
    >
      <h4 class="q-ma-none q-pa-none q-mb-sm text-yellow">{{ currentCatIdFromPath.name }}</h4>
      <div
        v-for="product of products[currentCatIdFromPath.id]"
        :key="`product-${product.id}`"
        class="q-mb-lg"
      >
        <product-card
          :product-data="product"
          :cat-id="currentCatIdFromPath.id"
          :can-add-to-order="canAddToOrder"
          :can-review="canReview"
        />
      </div>
    </div>
    <q-splitter
      v-else
      v-model="splitterModel"
      class="full-width"
      separator-class="bg-grey-9"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-left bg-black"
          active-color="yellow"
        >
          <q-tab
            v-for="category of categories"
            :key="`tab-${category.id}`"
            :name="`${category.path}`"
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
            :name="`${category.path}`"
            class="q-pt-sm"
          >
            <h4 class="q-ma-none q-pa-none q-mb-sm text-yellow">{{ category.name }}</h4>
            <div class="row q-col-gutter-lg">
              <div
                v-for="product of products[category.id]"
                :key="`product-${product.id}`"
                class="col-12 col-md-3"
              >
                <product-card
                  :product-data="product"
                  :cat-id="category.id"
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
import categories from 'src/services/categories'
import products from 'src/services/products'

export default {
  name: 'CardapioPage',
  meta: {
    title: 'Cardápio - Yakuza Sushi'
  },
  components: {
    ProductCard: () => import('src/components/cards/product-card')
  },
  data: () => ({
    canAddToOrder: true,
    canReview: true,
    tab: '',
    splitterModel: 14,
    products,
    categories
  }),
  computed: {
    currentCatIdFromPath () {
      console.log(this.categories)
      return this.categories.find((category) => category.path === this.$route.params.categoryPath)
    }
  },
  beforeMount () {
    this.tab = this.$route.params.categoryPath
  },
  mounted () {
    this.$root.$emit('set-page-title', '')
  }
}
</script>

<style>
.q-tab {
  justify-content: left;
}
.q-btn--fab.q-btn__wrapper {
  padding: 0 !important;
}
.q-btn--fab {
  width: 44px;
  height: 44px;
}
</style>
