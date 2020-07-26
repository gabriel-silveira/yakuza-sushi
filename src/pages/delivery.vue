<template>
  <q-page class="flex q-pa-none">
    Delivery
  </q-page>
</template>

<script>
export default {
  name: 'DeliveryPage',
  mounted () {
    this.$root.$emit('set-page-title', 'Delivery')
  }
}
</script>
