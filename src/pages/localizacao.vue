<template>
  <q-page class="flex q-pa-none">
    Localização
  </q-page>
</template>

<script>
export default {
  name: 'LocalizacaoPage',
  mounted () {
    this.$root.$emit('set-page-title', 'Localização')
  }
}
</script>
