<template>
  <q-page class="flex q-pa-none">
    <div class="full-width">
      <div class="logo-home">
        <img
          src="~assets/imgs/logo-yakuza-transp.png"
        />
        <div class="phones">
            <p>(11) 2372-5893</p>
            <p>(11) 94575-0784</p>
            <p class="text-caption">Vila Mariana, Saúde e Aclimação</p>
        </div>
      </div>
      <q-carousel
        v-model="slide"
        :autoplay="autoplay"
        :fullscreen="true"
        animated
        infinite
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          name="banner-1"
          class="column no-wrap flex-center q-pa-none banner-1"
        >
          <div class="bg-fume" />
          <div class="carousel-content">
            <h2 class="q-mb-md">Combinados</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, arcu quis porta blandit, nibh mauris aliquet purus, nec dapibus est massa eu.</p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="banner-2"
          class="column no-wrap flex-center q-pa-none banner-2"
        >
          <div class="bg-fume" />
        </q-carousel-slide>
        <q-carousel-slide
          name="banner-3"
          class="column no-wrap flex-center q-pa-none banner-3"
        >
          <div class="bg-fume" />
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  meta: {
    title: 'Yakuza Sushi'
  },
  data: () => ({
    slide: 'banner-1',
    autoplay: true
  })
}
</script>

<style>
.logo-home {
  z-index: 99999;
  position: absolute;
  width: 1000px;
  height: 100%;
  left: 50%;
  padding: 100px 0;
  margin-left: -500px;
}

.logo-home > img {
  height: 160px;
  margin-left: -20px;
}

.banner-1 {
  background: url('~assets/imgs/slider/banner-1.jpg');
  background-size: cover;
}
.banner-2 {
  background: url('~assets/imgs/slider/banner-2.jpg');
  background-size: cover;
}
.banner-3 {
  background: url('~assets/imgs/slider/banner-3.jpg');
  background-size: cover;
}

.bg-fume {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
}

.carousel-content {
  position: absolute;
  width: 1000px;
  height: 400px;
  left: 50%;
  top: 50%;
  padding: 0px 0px;
  margin-top: -200px;
  margin-left: -500px;
}

.carousel-content h2 {
  color: #FA3;
}

.carousel-content p {
  font-size: 24px;
  font-weight: 300;
}

.phones {
  float: right;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 300;
  text-align: right;
  line-height: 22px;
}
</style>
