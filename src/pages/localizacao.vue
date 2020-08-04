<template>
  <q-page>
    <div class="gradient-page" style="position:absolute;width:100%;height:100%;">
      <div class="row" style="height:120px">
        <div class="col-6 q-pa-md">
          <h4 class="text-yellow q-mt-none q-mb-sm">Unidade Manuel de Paiva</h4>
          <p>Rua Manuel de Paiva, 173 - Vila Mariana</p>
        </div>
        <div class="col-6 q-pa-md">
          <h4 class="text-yellow q-mt-none q-mb-sm">Unidade Vergueiro</h4>
          <p>Rua Vergueiro, 2552 - Vila Mariana</p>
        </div>
      </div>
      <div class="row" style="height:calc(100% - 120px)">
        <div class="col-6 q-pl-md q-pr-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.585685174172!2d-46.63799498445328!3d-23.58331926829001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59813f2f9d47%3A0x40c780a589c8ec06!2sR.%20Manoel%20de%20Paiva%2C%20173%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004106-020!5e0!3m2!1spt-BR!2sbr!4v1596552625292!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="col-6 q-pl-md q-pr-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.561747525134!2d-46.63911598445339!3d-23.584178468321678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5986cd8799c7%3A0x8162ec253365e8fb!2sRua%20Vergueiro%2C%202552%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004102-000!5e0!3m2!1spt-BR!2sbr!4v1596552314329!5m2!1spt-BR!2sbr" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LocalizacaoPage',
  meta: {
    title: 'Localização - Yakuza Sushi'
  },
  data: () => ({
    splitterModel: 50
  })
}
</script>

<style>
  .gradient-page {
    background: linear-gradient(180deg, rgba(128,0,0,1) 35%, rgba(255,96,0,1) 100%) !important;
  }
</style>
