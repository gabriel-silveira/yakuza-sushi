<template>
  <q-card class="my-card">
    <q-img src="https://mundozumm.com.br/wp-content/uploads/2019/01/barca-de-comida-japonesa-em-casa.jpg" />
    <q-card-section>
      <q-btn
        fab
        padding="none"
        color="positive"
        icon="las la-cart-arrow-down"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
        @click="addItem(productData.name)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ productData.name }}
        </div>
      </div>

      <q-rating
        v-model="stars"
        :max="5"
        size="18px"
        @input="sendReview"
      />
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

    <q-card-actions class="q-pl-md">
      {{ productData.price }}
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
    }
  }
}
</script>
