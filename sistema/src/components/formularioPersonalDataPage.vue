<template>
  <div class="container" style="width:50%">
    <b-form class="form-default" @submit.stop.prevent>
      <!--Nome Completo-->
      <label for="user-name">Nome completo*</label>
      <b-form-input 
        class='default-input' 
        placeholder="Digite o nome completo" 
        v-model="form.userName"
        :state="nameValidator" id="user-name"
        autocomplete="on"
        />
      <b-form-invalid-feedback 
        :state="nameValidator"
      >
        O nome deve possuir de 3 a 48 caracteres!
      </b-form-invalid-feedback>
      <b-form-valid-feedback 
        :state="nameValidator"
      >
        Perfeito!
      </b-form-valid-feedback>
      <!--CPF TODO: Validar o CPF-->
      <label for="user-cpf">CPF*</label>
      <b-form-input 
        class='default-input' 
        placeholder="Digite um CPF" 
        v-model="form.userCPF"
        :state="nameValidator" id="user-cpf"
        autocomplete="on"
        />
      <b-form-invalid-feedback 
        :state="nameValidator"
      >
        O CPF está incorreto
      </b-form-invalid-feedback>
      <b-form-valid-feedback 
        :state="nameValidator"
      >
        Perfeito!
      </b-form-valid-feedback>
      <!-- Número de Celular TODO: Mudar Valores -->
      <label for="user-tellphone">Número de Celular*</label>
      <b-form-input 
        class='default-input half-input' 
        placeholder="(00) 0 0000-0000" 
        v-model="form.userCPF"
        :state="nameValidator" id="user-cpf"
        autocomplete="on"
        />
      <b-form-invalid-feedback 
        :state="nameValidator"
      >
        O CPF está incorreto
      </b-form-invalid-feedback>
      <b-form-valid-feedback 
        :state="nameValidator"
      >
        Perfeito!
      </b-form-valid-feedback>

    </b-form>
  </div>
</template>

<script>
export default {

  data: () => ({
    validandoFormulario: false,
    form: {
      userName: '',
      userCPF:''
    }
  }),
  computed: {
    nameValidator() {
      if (!this.validandoFormulario) {
        return null
      } else {
        return this.form.userName > 3 && this.form.userName < 48
      }
    },
    cpfValidator(){
      if (!this.validandoFormulario) {
        return null
      } else {
       return this.validarCampoCpf()
      }
    }
  },
  methods: {
    validarCampoCpf () {
     return null
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/variaveis.scss';


.form-default{
  width: 100%; 
  position:relative;
  display:flex;
  flex-flow:column;
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

}
}


</style>