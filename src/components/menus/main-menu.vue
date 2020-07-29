<template>
  <div
    class="q-gutter-sm row"
  >
    <img
      v-if="$route.name !== ROUTES.HOME"
      class="q-ml-lg q-mr-lg q-mt-md q-mb-sm cursor-pointer"
      style="height:35px"
      src="/imgs/logo-yakuza-transp-header.png"
      @click="$router.push({ name: ROUTES.HOME })"
    />

    <div
      :class="$route.name !== ROUTES.HOME ? 'q-mt-md' : ''"
    >
      <q-btn
        flat
      >
        <q-icon class="q-mr-sm" size="24px" name="las la-list" />
        <div>Cardápio</div>

        <q-menu
          content-class="bg-secondary"
          transition-show="jump-down"
          transition-hide="jump-up"
          auto-close
        >
          <q-list style="min-width: 100px">
            <q-item
              @click="$router.push({ name: ROUTES.MENU })"
              clickable
            >
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
        flat
        @click="$emit('show-horario-dialog')"
      >
        <q-icon class="q-mr-sm" size="24px" name="las la-clock" />
        <div>Horários</div>
      </q-btn>

      <q-btn
        flat
        @click="$router.push({ name: ROUTES.DELIVERY })"
      >
        <q-icon class="q-mr-sm" size="24px" name="las la-motorcycle" />
        <div>Delivery</div>
      </q-btn>

      <q-btn
        flat
        @click="$router.push({ name: ROUTES.LOCATION })"
      >
        <q-icon class="q-mr-sm" size="24px" name="las la-map-marker" />
        <div>Localização</div>
      </q-btn>
    </div>
  </div>
</template>

<script>
import ROUTES from 'src/constants/routes'

export default {
  name: 'MainMenuComponent',
  data: () => ({
    ROUTES
  })
}
</script>
