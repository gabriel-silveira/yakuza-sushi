<template>
  <q-page class="flex q-pa-none">
    <div class="full-width">
      <div
        v-if="!$q.platform.is.mobile"
        class="logo-home text-center"
      >
        <img
          src="/imgs/logo-yakuza-transp.png"
        />
      </div>

      <q-carousel
        v-model="slide"
        :autoplay="true"
        class="full-height"
        animated
        infinite
        arrows
        control-type="push"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide
          name="banner-1"
          class="column no-wrap flex-center q-pa-none banner-1"
        >
          <div class="bg-fume" />
          <div class="carousel-content text-center">
            <h3 class="q-mb-sm text-yellow">Delivery</h3>
            <p>Em tempos de pandemia, <br v-if="$q.platform.is.mobile" />a <span class="text-primary">Yakuza Sushi</span> vai até você</p>
            <q-btn
              class="q-mt-sm"
              color="yellow"
              label="Faça seu pedido"
              outline
              @click="$router.push({ name: ROUTES.MENU, params: { categoryPath: categories[0].path } })"
            />
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="banner-2"
          class="column no-wrap flex-center q-pa-none banner-2"
        >
          <div class="bg-fume" />
          <div class="carousel-content text-center">
            <h3 class="q-mb-md text-yellow">Higiene</h3>
            <p>Estamos levando nossos <br v-if="$q.platform.is.mobile" />pratos até você com a<br/> máxima higienização <br v-if="$q.platform.is.mobile" />e segurança na entrega!</p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="banner-3"
          class="column no-wrap flex-center q-pa-none banner-3"
        >
          <div class="bg-fume" />
          <div class="carousel-content text-center">
            <h3 class="q-mb-none text-yellow">O MELHOR</h3>
            <p>DELIVERY DE SUSHI <br v-if="$q.platform.is.mobile" />de toda região!</p>
            <p class="text-yellow">Entregamos 24h por dia, <br v-if="$q.platform.is.mobile" />todos os dias da semana</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import categories from 'src/services/categories'
import ROUTES from 'src/constants/routes'

export default {
  name: 'PageIndex',
  meta: {
    title: 'Yakuza Sushi'
  },
  data: () => ({
    ROUTES,
    slide: 'banner-1',
    autoplay: true,
    categories
  })
}
</script>

<style>
.logo-home {
  z-index: 1;
  position: absolute;
  width: 1000px;
  height: auto;
  top: 0;
  left: 50%;
  padding-top: 110px;
  margin-left: -500px;
}

.logo-home > img {
  height: 160px;
}

.banner-1 {
  background: url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&w=1000&q=80');
  background-size: cover;
}
.banner-2 {
  background: url('/imgs/slider/banner-2.jpg');
  background-size: cover;
}
.banner-3 {
  background: url('/imgs/slider/banner-3.jpg');
  background-size: cover;
}

.bg-fume {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8));
}

.carousel-content {
  position: absolute;
  width: 1000px;
  height: 400px;
  left: 50%;
  top: 50%;
  padding: 0px 0px;
  margin-top: -150px;
  margin-left: -500px;
}

.carousel-content p {
  font-size: 24px;
  font-weight: 300;
}

@media only screen and (max-width: 600px) {
  .logo-home {
    z-index: 1;
    position: absolute;
    width: 1000px;
    height: auto;
    top: 0;
    left: 50%;
    padding-top: 80px;
    margin-left: -500px;
  }

  .logo-home > img {
    height: 120px;
  }

  .carousel-content p {
    font-size: 20px;
    font-weight: 300;
  }
}
</style>
