<template>
  <q-card
    v-if="productData.id"
    class="my-card full-height q-pb-xl"
    style="background: #171717"
  >
    <q-img
      :src="getProductImage(productData.id)"
      :ratio="16/9"
      spinner-color="grey"
    />
    <q-card-section>
      <q-btn
        v-if="canAddToOrder"
        round
        color="green-7"
        text-color="white"
        icon="las la-cart-arrow-down"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%); font-size: 16px; padding: 0px !important;"
        dense
        @click="addItem(productData.name)"
      >
        <q-tooltip>Adicionar ao pedido</q-tooltip>
      </q-btn>

      <div class="row no-wrap items-center">
        <div class="col text-h6 text-yellow">
          {{ productData.name }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ productData.description }}
      </div>
      <div class="text-caption text-grey">
        {{ productData.quantity }}
      </div>
    </q-card-section>

    <q-card-actions
      class="absolute-bottom q-pl-md q-pt-md q-pb-md bg-grey-10"
      align="right"
    >
      <div class="absolute text-body1" style="left:16px">
        {{ productData.price }}
      </div>

      <q-rating
        v-if="canReview"
        v-model="stars"
        :max="5"
        size="18px"
        color="positive"
        @input="sendReview"
      >
        <q-tooltip>Adicionar ao pedido</q-tooltip>
      </q-rating>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    productData: {
      type: Object,
      default: () => ({})
    },
    catId: {
      type: Number,
      default: 0
    },
    canAddToOrder: {
      type: Boolean,
      default: false
    },
    canReview: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stars () {
      return this.productData.rate
    }
  },
  methods: {
    sendReview (rate) {
      this.productData.rate = rate

      this.$q.notify({
        message: 'Avaliação enviada. Muito obrigado!',
        icon: 'las la-star',
        color: 'secondary'
      })
    },
    addItem (productName) {
      this.$q.notify({
        message: 'Item adicionado ao pedido',
        caption: productName,
        icon: 'las la-shopping-cart',
        color: 'positive'
      })
    },
    getProductImage (prodId) {
      console.log(`/imgs/cardapio/${this.catId}-${prodId}.png`)
      return `/imgs/cardapio/${this.catId}-${prodId}.png`
    }
  }
}
</script>
