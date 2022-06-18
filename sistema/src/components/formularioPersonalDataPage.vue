<template>
  <section>
    <div class="container" style="width: 50%">
      <b-form
        class="form-default"
        method="post"
        @submit="tratarFormulario"
        @submit.stop.prevent
      >
        <!--Nome Completo-->
        <label for="user-name">Nome completo*</label>
        <b-form-input
          class="default-input"
          placeholder="Digite o nome completo"
          v-model="form.userName"
          :state="nameValidator"
          id="user-name"
          autocomplete="on"
        />
        <b-form-invalid-feedback
          v-if="!nameValidator"
          class="default-feedback"
          id="1"
          :state="nameValidator"
        >
          O nome deve possuir de 3 a 48 caracteres!
        </b-form-invalid-feedback>

        <!-- CPF -->
        <label for="user-cpf">CPF*</label>
        <b-form-input
          class="default-input half-input"
          placeholder="Digite um CPF"
          v-model="form.userCPF"
          :state="cpfValidator"
          id="user-cpf"
          maxlength="14"
          autocomplete="on"
        />
        <b-form-invalid-feedback
          v-if="!cpfValidator"
          class="default-feedback"
          id="2"
          :state="cpfValidator"
        >
          O CPF está incorreto!
        </b-form-invalid-feedback>
        <!-- Número de Celular TODO: Mudar Valores -->
        <label for="user-tellphone">Número de Celular*</label>
        <b-form-input
          class="default-input half-input"
          placeholder="(00) 0 0000-0000"
          v-model="form.userCellphone"
          maxlength="15"
          :state="cellPhoneValidator"
          id="user-tellphone"
          autocomplete="on"
        />
        <b-form-invalid-feedback
          v-if="!cellPhoneValidator"
          class="default-feedback"
          :state="cellPhoneValidator"
        >
          O Telefone está incorreto!
        </b-form-invalid-feedback>

        <SplitTwo style="width: 100%">
          <template v-slot:one>
            <!-- Estado TODO: Mudar Valores -->
            <div class="flex1">
              <label for="user-tellphone">Estado*</label>
              <b-form-select
                class="select-input"
                id="user-estado"
                v-model="form.userEstado"
                :options="autocomplete.estado"
              />
              <b-form-invalid-feedback
                v-if="!stateValidator"
                class="default-feedback"
                :state="stateValidator"
              >
                Selecione o Estado!
              </b-form-invalid-feedback>
            </div>
          </template>
          <template v-slot:two>
            <!-- Cidade TODO: Mudar Valores -->
            <div class="flex1 flex-space">
              <label for="user-tellphone">Cidade*</label>
              <b-form-select
                class="select-input"
                id="user-estado"
                v-model="form.userCidade"
                :options="autocomplete.cidade"
              />
              <b-form-invalid-feedback
                v-if="!cityValidator"
                class="default-feedback"
                :state="cityValidator"
              >
                Selecione a cidade!
              </b-form-invalid-feedback>
            </div>
          </template>
        </SplitTwo>
        <ProgressBar :max="2" :progress="1" />
        <ButtonSubmit />
      </b-form>
    </div>
    <div class="container imgdesktop" style="width: 55%"></div>
  </section>
</template>

<script>
import SplitTwo from "./main/SplitTwo.vue";
import ProgressBar from "./main/ProgressBar.vue";
import ButtonSubmit from "./main/ButtonSubmit.vue";
export default {
  components: { SplitTwo, ProgressBar, ButtonSubmit },
  data: () => ({
    validandoFormulario: false,
    form: {
      userName: "",
      userCPF: "",
      userCellphone: "",
      userEstado: null,
      userCidade: null,
    },
    autocomplete: {
      estado: [
        { text: "Selecione", value: null },
        { text: "São Paulo", value: "SP" },
        { text: "Rio de Janeiro", value: "RJ" },
      ],
      cidade: [{ text: "Selecione", value: null }, "Fernandópolis", "Jales"],
    },
  }),
  watch:{
  'form.userCPF' (actualValue){
    if(actualValue.length == 3 )
  },
  'form.userCellphone'(v){

  let r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");

  if (r.length > 11) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 7) {
    r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (v.trim() !== "") {
    r = r.replace(/^(\d*)/, "($1");
  }
  this.form.userCellphone = r;
  }
  },
  computed: {
    nameValidator() {
      if (!this.validandoFormulario) {
        return null;
      } else {
        return this.form.userName.length > 3 && this.form.userName.length < 48;
      }
    },
    cpfValidator() {
      if (!this.validandoFormulario) {
        return null;
      } else {
        return this.validarCampoCpf()
      }
    },
    cellPhoneValidator() {
      if (!this.validandoFormulario) {
        return null;
      } else {
        return this.validarCampoCelular();
      }
    },
    stateValidator() {
      if (!this.validandoFormulario) {
        return null;
      } else {
        return this.form.userEstado != null ? true : false;
      }
    },
    cityValidator() {
      if (!this.validandoFormulario) {
        return null;
      } else {
        return this.form.userCidade != null ? true : false;
      }
    },
  },
  methods: {
    tratarFormulario() {
      this.validandoFormulario = true;
    },
    validarCampoCpf() {
      let strCPF = this.form.userCPF
      strCPF = strCPF.replace(/[^0-9]/g,'');
      var Soma;
      var Resto;
      let i;
      Soma = 0;
      if (strCPF == "00000000000") return false;

      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11))) return false;

      return true;
    },
    validarCampoCelular() {
      let telefone = this.form.userCellphone
      telefone = telefone.replace(/[^0-9]/g,'');
      if (typeof telefone != "string") {
        telefone = telefone.toString();
      }
      //limpa string para validacao
      telefone = telefone.replace(/\D/g, "");
      //aplica ER
      var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
      if (valida) {
        return true;
      } else {
        return false;
      }
    },
  },
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
    .default-feedback {
      margin-top: -30px;
      margin-bottom: 30px;
    }
    .default-input {
      border: 1px solid $primary-color-0;
      padding-left: 20px;
      margin-bottom: 30px;
    }
    .half-input {
      width: 75%;
    }

    .select-input {
      border: 1px solid $primary-color-0;
      padding: 6px;
      border-radius: 5px;
      color: $secondary-color-4;
      box-shadow: 0 0 0 0;
      outline: 0;
      margin-bottom: 30px;
    }
    .flex1 {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      min-width: 100px;
      flex-direction: column;
    }
    .flex-space {
      margin-left: 20px;
    }
  }
  .imgdesktop {
    background-image: url("@/assets/images/desktop/desktop-pagina-1.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 15px;
    @media (max-width: 1600px) {
      background-position: 0 10px;
    }
    @media (max-width: 1360px) {
      background-position: 0px 40px;
    }
    @media (max-width: 1050px) {
      background-position: 0px 60px;
    }
  }
}
</style>