<template>
  <q-card
    v-if="productData.id"
    class="my-card"
    style="background: #171717"
  >
    <q-img
      :src="getProductImage(productData.id)"
      :ratio="16/9"
      spinner-color="white"
    />
    <q-card-section>
      <q-btn
        v-if="canAddToOrder"
        fab
        padding="none"
        color="positive"
        icon="las la-cart-arrow-down"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
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
        {{ productData.quantity }}
      </div>
      <div class="text-caption text-grey">
        {{ productData.description }}
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-actions
      class="q-pl-md"
      align="right"
    >
      <div class="absolute" style="left:16px">
        {{ productData.price }}
      </div>

      <q-rating
        v-if="canReview"
        v-model="stars"
        :max="5"
        size="18px"
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
    canAddToOrder: {
      type: Boolean,
      default: false
    },
    canReview: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    stars: 4
  }),
  methods: {
    sendReview () {
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
        color: 'secondary'
      })
    },
    getProductImage (prodId) {
      return `/imgs/cardapio/${prodId}.png`
    }
  }
}
</script>
