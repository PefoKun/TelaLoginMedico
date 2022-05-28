<template>
  <section style="width:50%">
    <InfoShow :title="'Nome completo'">Aa</InfoShow>
    <InfoShow :title="'CPF'">Aa</InfoShow>
    <InfoShow :title="'Número de celular ou telefone'">Aa</InfoShow>
    <InfoShow :title="'Estado/Cidade'">Aa</InfoShow>
    <InfoShow :title="'Especialidade principal'">Aa</InfoShow>
    <InfoShow :title="'Preço da consulta'">Aa</InfoShow>
    <InfoShow :title="'Formas de pagamento da consulta'">Aaasdasdsasdasdsadadsdadsdasdsaadsadsadasdsdadsadsadsadsa</InfoShow>
  </section>
</template>

<script>

import InfoShow from "./main/InfoShow.vue";

export default {
  components: { InfoShow },
  data: () => ({
  }),
  computed: {},
  methods: {},
};
</script>

<style lang='scss' scoped>
@import "../assets/variaveis.scss";

</style>
