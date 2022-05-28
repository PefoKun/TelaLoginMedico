<template>
  <section>
  <div class="container" style="width:50%">
    <b-form class="form-default" @submit.stop.prevent>
      <!--Nome Completo-->
      <label for="user-name">Nome completo*</label>
      <b-form-input 
        class='default-input' 
        placeholder="Digite o nome completo" 
        v-model="form.userName"
        :state="nameValidator" 
        id="user-name"
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
        class='default-input half-input' 
        placeholder="Digite um CPF" 
        v-model="form.userCPF"
        :state="nameValidator" 
        id="user-cpf"
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
        :state="nameValidator" 
        id="user-tellphone"
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

      <SplitTwo style="width:100%">
       <template v-slot:one>
      <!-- Estado TODO: Mudar Valores -->
      <div class="flex1">
      <label for="user-tellphone">Estado*</label>
        <b-form-select
          class='select-input' 
          id="user-estado"
          v-model="form.userEstado"
          :options="autocomplete.estado"
          required
        />
      </div>
      </template>
      <template v-slot:two>
      <!-- Cidade TODO: Mudar Valores -->
       <div class="flex1 flex-space">
       <label for="user-tellphone">Cidade*</label>
       <b-form-select
          class='select-input' 
          id="user-estado"
          v-model="form.userCidade"
          :options="autocomplete.cidade"
          required
        />
      </div>
      </template>
      </SplitTwo>
      <ProgressBar :max="2" :progress="1"/>
      <ButtonSubmit />
    </b-form>
    
  </div>
  <div class="container imgdesktop" style="width:50%">
   
  </div>
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
            userTellphone:"",
            userEstado:null,
            userCidade:null
        },
        autocomplete:{
          estado:[{text:'Selecione', value:null},{text:'São Paulo', value:'SP'},{text:'Rio de Janeiro',value:'RJ'}],
          cidade:[{text:'Selecione', value:null},'Fernandópolis','Jales']
        }
    }),
    computed: {
        nameValidator() {
            if (!this.validandoFormulario) {
                return null;
            }
            else {
                return this.form.userName > 3 && this.form.userName < 48;
            }
        },
        cpfValidator() {
            if (!this.validandoFormulario) {
                return null;
            }
            else {
                return this.validarCampoCpf();
            }
        }
    },
    methods: {
        validarCampoCpf() {
            return null;
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/variaveis.scss';


section{
  display: flex;

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
  .half-input{
    width:75%;
  }
  
  .select-input{
    border:1px solid $primary-color-0;
    padding:6px;
    border-radius: 5px;
    color:$secondary-color-4;
    box-shadow: 0 0 0 0;
    outline: 0;
      margin-bottom: 30px;
  }
  .flex1{
  display: flex;
  flex-wrap: nowrap;
  width:100%;
  min-width: 100px;
  flex-direction: column;
  }
  .flex-space{
  margin-left: 20px;
  }
}
  .imgdesktop{
    background-image: url('@/assets/images/desktop/desktop-pagina-1.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}

</style>