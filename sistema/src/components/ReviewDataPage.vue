<template>
  <section>
  <div class="container" style="width:50%;padding:0">
    <InfoShow :title="'Nome completo'">Paulo Emmanuel Ferreira de Oliveira</InfoShow>
    <InfoShow :title="'CPF'">472.687.888.35</InfoShow>
    <InfoShow :title="'Número de celular ou telefone'">(17) 9 99647-0610</InfoShow>
    <InfoShow :title="'Estado/Cidade'">SP/Fernandópolis</InfoShow>
    <InfoShow :title="'Especialidade principal'">Ortodondia</InfoShow>
    <InfoShow :title="'Preço da consulta'">R$ 200,00</InfoShow>
    <InfoShow :title="'Formas de pagamento da consulta'">Cartão de crédito - Parcelamento em 2x sem juros</InfoShow>
  
    <div class="link-div" style="margin-top:0"><ButtonCadastro/></div>
    <div class="link-div"><a href="/">Editar cadastro</a></div>
  
  </div>
  <div class="container imgdesktop" style="width:60%"></div>
  </section>
</template>

<script>

import InfoShow from "./main/InfoShow.vue";
import ButtonCadastro from "./main/ButtonCadastro.vue";

export default {
  components: { InfoShow, ButtonCadastro },
  data: () => ({
  }),
  computed: {},
  methods: {},
};
</script>

<style lang='scss' scoped>
@import  '../assets/variaveis.scss';
.link-div{
  margin-top: 20px;
  text-align: center;
a{
  color:$primary-color-0;
  text-decoration: none;
  font-family: $font-confortaa;
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
}
}

.imgdesktop{
    background-image: url('@/assets/images/desktop/desktop-pagina-3.png');
    background-repeat: no-repeat;
    background-size: contain;
   
    margin-right: 13px;
    background-position:0 70px;
    @media(max-width:1600px){
      background-position:0 70px;
    }
    @media(max-width:1360px){
      background-position: 0px 90px;
    }
    @media(max-width:1050px){
      background-position: 0px 120px;
    }
}
section{
  display:flex;
}

</style>
