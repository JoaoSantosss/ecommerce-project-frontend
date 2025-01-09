<script>

export default {
  name: 'FormDataAccount',
  data() {
    return {
      UserDate: {
        name: 'Carlos Eduardo da Silva Sampaio',
        email: 'sampaiocarlos957@gmail.com',
        cpf: '62052743375'
      },
      mensageCustom_error: 'deu ruim!'
    }
  },
  props: {
    applyCpfMask: { type: Function, Required: true }
  },
  mounted() {
    const checkAndApplyCpfMask = () => {
      const inputCpf = this.$refs.cpfUser;
      inputCpf.value = this.applyCpfMask(inputCpf.value);
    };
    checkAndApplyCpfMask();
    this.intervalId = setInterval(checkAndApplyCpfMask, 120000); // 120.000 = 2 minutos
  },

  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    showStyleInputs(event) {
        const input = event.target;
        let asides = input.parentNode;
        let container = asides.querySelector('.container_ShowError');

        // this.fullName = `${this.UserDateSeller.name}`
        // this.fullName += ` ${this.UserDateSeller.surname}`

        // this.TratUserDateSeller = {
        //     email: this.UserDateSeller.email,
        //     password: this.UserDateSeller.password,
        //     name: this.UserDateSeller.name,
        //     cnpj: this.UserDateSeller.cnpj,
        //     legalName: this.UserDateSeller.legalName,
        //     cpf: this.UserDateSeller.cpf 
        // }

        if (input.value.trim() !== '') {
            input.classList.add('maintain_effect');
        } else {
            input.classList.remove('maintain_effect');
        }
        // if(input.value.length < 3) {
        //     input.classList.add('inputError');
        //     container.style.display = 'flex';
        //     this.Mensagem_de_erro_personalizada = 'O campo deve ter no mínimo 3 caractres!'
        // } else {
        //     input.classList.remove('inputError');
        //     container.style.display = 'none';
        // }
        if (input.id === 'cpfUser') {
            input.value = this.applyCpfMask(input.value);
        }
        // if (input.id === 'cnpjSeller') {
        //     input.value = this.applyCnpjMask(input.value);
        // }  
    },
    toggle_EditData(event) {
      const btn = event.target
      const inputs = document.querySelectorAll('.maintain_effect')
      const labels = document.querySelectorAll('.classLabel')

      btn.classList.toggle('toggle_EditData');
      if(btn.classList.contains('toggle_EditData')) {
        inputs.forEach(input => {
          input.disabled = false;
          input.classList.remove('effect_disabled');
          input.classList.remove('effect_disabled_input')
        });
        labels.forEach(label => {
          label.classList.remove('effect_disabled');
        });
      } else {
        inputs.forEach(input => {
          input.disabled = true;
          input.classList.add('effect_disabled');
          input.classList.add('effect_disabled_input')
        });
        labels.forEach(label => {
          label.classList.add('effect_disabled');
        });
      }
    },
    stopSubmit(event) {
      event.preventDefault()
    }
  }
}
</script>

<template>
  <form @submit="stopSubmit">
    <section class="sectionsForm">
        <aside class="asidesForms">
            <input 
            v-model="UserDate.name"
             type="text" id="nameUser"
              name="nameUser"
               ref="nameUser"
                @keyup="showStyleInputs"
                 class="maintain_effect effect_disabled effect_disabled_input"
                  disabled
                >
            <label for="nameUser" class="effect_disabled classLabel">Nome</label>
            <div class="container_ShowError">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <p>{{ mensageCustom_error }}</p>
            </div>
        </aside>
        <aside class="asidesForms">
            <input v-model="UserDate.cpf"
             type="text"
              id="cpfUser"
               name="cpfUser"
                ref="cpfUser"
                 @keyup="showStyleInputs"
                  class="maintain_effect effect_disabled effect_disabled_input"
                   maxlength="14"
                    disabled
                 >
            <label for="cpfUser" class="effect_disabled classLabel">CPF</label>
            <div class="container_ShowError">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <p>{{ mensageCustom_error }}</p>
            </div>
        </aside>
    </section>

    <section class="sectionsForm">
      <aside class="asidesForms">
        <input v-model="UserDate.email"
         type="text"
          id="EmailUser"
           name="EmailUser"
            ref="EmailUser"
             @keyup="showStyleInputs"
              class="maintain_effect effect_disabled effect_disabled_input"
               disabled
             >
            <label for="EmailUser" class="effect_disabled classLabel">Email</label>
            <div class="container_ShowError">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <p>{{ mensageCustom_error }}</p>
            </div>
      </aside>

    </section>

    <section class="sectionsForm">
      <aside class="asidesForms"></aside>
      <aside class="asidesForms" id="aside_buttons">
        <button class="btnFormEdit_inforAccount" @click="toggle_EditData">Editar dados</button>
        
        <button class="btnFormEdit_inforAccount">Salvar</button>
      </aside>
    </section>
  </form>
</template>

<style scoped>
.sectionsForm {
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100px;
}

.asidesForms {
    display: flex;
    flex-direction: column;
    width: 45%;
    /* border: 2px solid red; */
    gap: 10px;
    
}

label {
    /* transform: translateY(-45px); */
    transition: all 0.4s;
    padding-left: 5px;
    font-size: 1.5rem;
    /* z-index: 0; */
    color: var(--color--text);
    margin-top: -50px;
}

input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid rgb(171, 171, 171);
    outline: none;
    color: var(--color--text);
    padding: 6px;
    transition: all 0.4s;
    font-size: 1.4rem;
    /* z-index: 100; */
}
input:focus {
    border-bottom: 3px solid rgb(255, 255, 255);
}
input:focus + label {
  margin-top: -80px;
}

input.maintain_effect + label {
  margin-top: -80px;
}
.container_ShowError {
    display: none; /*aa flex*/
    align-items: center;
    gap: 5px;
    color: rgb(255, 0, 0);
    font-weight: bold;
    transform: translateY(-300%);
    font-size: 0.7rem;
}

#aside_buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid red; */
  align-items: flex-end;
  padding-left: 10%;
}
.btnFormEdit_inforAccount {
  width: 40%;
  height: 50%;
  border-radius: 50px;
  border: none;
  background-color: #5A61BD;
  color: #ffffff;
  font-size: 1.2vw;
  font-weight: 100;
  cursor: pointer;
  transition: all 0.4s;
}
.btnFormEdit_inforAccount:hover {
  scale: 1.1;
}

.effect_disabled {
  color: #ffffff27;
  pointer-events: none;
}
.effect_disabled_input {
  border-bottom: 3px solid #ffffff27;
}
</style>
