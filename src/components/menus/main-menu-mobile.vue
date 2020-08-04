<template>
  <q-list
    separator
    class="bg-secondary"
  >
    <q-item
      clickable
      v-ripple
      @click="$router.push({ name: ROUTES.HOME })"
    >
      <q-item-section class="q-pa-sm">
        <img
          src="/imgs/logo-yakuza-transp-header.png"
          style="width:115px;height:35px"
        />
      </q-item-section>
    </q-item>
    <q-expansion-item
      icon="las la-list"
      label="Cardápio"
    >
      <q-item
        v-for="category of categories"
        :key="`tab-${category.id}`"
        clickable
        @click="goCategory(category.path)"
      >
        <q-item-section>{{ category.name }}</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-item
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon name="las la-clock" />
      </q-item-section>
      <q-item-section>Horários de funcionamento</q-item-section>
    </q-item>
    <q-item
      clickable
      v-ripple
      @click="$router.push({ name: ROUTES.LOCATION })"
    >
      <q-item-section avatar>
        <q-icon name="las la-map-marker" />
      </q-item-section>
      <q-item-section>Localização</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import categories from 'src/services/categories'
import ROUTES from 'src/constants/routes'

export default {
  name: 'MainMenuMobileComponent',
  data: () => ({
    ROUTES,
    categories
  }),
  methods: {
    goCategory (categoryPath) {
      this.$router.push({
        name: ROUTES.MENU,
        params: {
          categoryPath
        }
      })
    }
  }
}
</script>
