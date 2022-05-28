<template>
  <section>
    <div class="container" style="width: 50%">
      <b-form class="form-default" @submit.stop.prevent>
        <label for="user-tellphone">Especialidade principal*</label>
        <b-form-select
          class="select-input"
          id="user-especiality"
          v-model="form.userEspecialidade"
          :options="autocomplete.especialidade"
        />

        <label for="user-price">Informe o preço da consulta*</label>
        <b-input-group class="half-input">
          <template #prepend>
            <b-input-group-text>R$</b-input-group-text>
          </template>
          <b-form-input
            class="default-input half-input"
            placeholder="Valor"
            id="user-price"
            style="padding-left: 5px; width: 20px"
          />
        </b-input-group>

        <label for="user-payment">Formas de pagamento da consulta*</label>
        <b-form-checkbox
          class="payout-check"
          v-for="pay in payoutMethods"
          v-model="form.userPayoutMethod"
          :key="pay.id"
          :value="pay.text"
          name="payout-select"
          inline
        >
          <span class="payout-text">{{ pay.text }}</span>
          <div v-if="pay.id == 3 && form.userPayoutMethod == 'Cartão de Crédito'" class="payout-cart-options">
          <b-form-group label="Parcelamento em:">
          <b-form-radio-group
            v-model="selected"
            :options="pay.append"
            name="payout-option"
            stacked
          ></b-form-radio-group>
        </b-form-group>
        </div>
        </b-form-checkbox>

        <ProgressBar style="margin-top:50px" :max="2" :progress="2" />
        <ButtonSubmit />

      </b-form>
    </div>
    <div class="container imgdesktop" style="width: 50%"></div>
  </section>
</template>

<script>
import ProgressBar from "./main/ProgressBar.vue";
import ButtonSubmit from "./main/ButtonSubmit.vue";
export default {
  components: { ProgressBar, ButtonSubmit },
  data: () => ({
    payoutMethods: {
      dinheiro: { text: "Em Dinheiro", append: null, id: 1 },
      pix: { text: "Pix", append: null, id: 2 },
      cartao: { text: "Cartão de Crédito", append: ['1x, sem juros', '2x, sem juros', '3x, sem juros'], id: 3 },
    },
    validandoFormulario: false,
    form: {
      userEspecialidade: null,
      userPreco: "",
      userPayoutMethod: 1,
    },
    autocomplete: {
      especialidade: [
        { text: "Selecione a Especialidade", value: null },
        "Ortopedia",
        "Clínico Geral",
      ],
    },
  }),
  computed: {
    cssProps() {
      return {
        '--hover-font-size': (this.baseFontSize * 2) + "em",
        '--bg-hover-color': this. ,
        '--hover-content': JSON.stringify(this.hoverContent)
      }
    }
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
@import "../assets/variaveis.scss";

section {
  display: flex;

  .form-default {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: column;
  }

  .container {
    margin-left: -20px;
    width: 50%;

    label {
      margin-bottom: 10px;
    }

    .default-input {
      border: 1px solid $primary-color-0;
      padding-left: 20px;
      margin-bottom: 30px;
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    .half-input {
      width: 75%;
    }

    .select-input {
      border: 1px solid $primary-color-0;
      padding: 8px;
      border-radius: 5px;
      color: $secondary-color-4;
      box-shadow: 0 0 0 0;
      outline: 0;
      margin-bottom: 30px;
    }
    .input-group-text {
      color: white;
      background-color: $primary-color-0;
      border-radius: 3px 0px 0px 3px;
      border: 1px solid $primary-color-0;
    }
    .flex1 {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      min-width: 100px;
      flex-direction: column;
    }
    .payout-check {
      background-color: $secondary-color-1;
      margin: 10px;
      padding: 7px 10px;
      font-weight: 600;
      font-family: $font-sans;
      border-radius: 5px;
      font-size: 15px;
      margin-left: 0;
      box-shadow: 0px 2px 5px $secondary-color-3;
      padding-left: 50px;
      position:relative;
      
      .payout-text {
        padding-left: 40px;
        width: 300px;
      }
      .payout-cart-options{
        margin-top:20px;
        font-weight: 500;
        margin-left: 40px;
        line-height: 40px;
        font-size: 15px;
      }
    }
    .flex-space {
      margin-left: 20px;
    }
  }

  .imgdesktop {
    background-image: url("@/assets/images/desktop/desktop-pagina-2.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>

<style lang="scss">

.custom-control-input[type='checkbox']{
        position: absolute;
        top:18px;
      }
label.custom-control-label{
  width: 90%;
  padding: 5px;
  input[type='checkbox']{
    border:10px solid black
  }
}
</style>