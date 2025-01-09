<script>

export default {
  name: 'FormChangePassword',
  data() {
    return {
      mensageCustom_error: 'deu ruim!'
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
             type="text" 
              id="oldUserPassword"
               name="oldUserPassword"
                ref="oldUserPassword"
                 @keyup="showStyleInputs"
                >
            <label for="oldUserPassword" class="effect_disabled">Senha antiga</label>
            <div class="container_ShowError">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <p>{{ mensageCustom_error }}</p>
            </div>
        </aside>
        <aside class="asidesForms">
            <input 
             type="text"
              id="UserPassword"
               name="UserPassword"
                ref="UserPassword"
                 @keyup="showStyleInputs"
                 >
            <label for="UserPassword" class="effect_disabled">Nova senha</label>
            <div class="container_ShowError">
                <ion-icon name="alert-circle-outline"></ion-icon>
                <p>{{ mensageCustom_error }}</p>
            </div>
        </aside>
    </section>

    <section class="sectionsForm">
      <aside class="asidesForms"></aside>

      <aside class="asidesForms" id="asideBtn">
        <button id="btn_save">Salvar</button>
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
#asideBtn {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
#btn_save {
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
#btn_save:hover {
  scale: 1.1;
}
</style>
