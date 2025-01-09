<script>
import NavBar from '@/components/ContentHeader/NavBar.vue';
import TheFooter from '@/components/ContentMain/TheFooter.vue';
import FormDataAccount from '@/views/ComponentsSettings/account_information_components/FormDataAccount.vue';
import FormChangePassword from '@/views/ComponentsSettings/account_information_components/FormChangePassword.vue';
import IconUser from '@/components/SubComponents/IconUser.vue';
import ButtonToggleForm from '@/views/AuthenticationPages/ButtonToggleForm.vue';
import PageFalseToken from '@/components/SubComponents/PageFalseToken.vue';

export default {
  name: 'AccountInformation',
  components: { NavBar, TheFooter, FormDataAccount, FormChangePassword, IconUser, ButtonToggleForm, PageFalseToken },
  data() {
    return {
      nameBtnForms: 'Trocar senha',
      showForms: true,
      showSectionDataUser: false
    }
  },
  props: {
    pass_route: { type: Function, Required: true },
    valueIconsCategory: { type: HTMLElement, Required: true },
    showLogoTheme: { type: Boolean, Required: true }
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    const dataUser = localStorage.getItem('user');

    if(token) {
        this.showSectionDataUser = true
    } else {
        this.showSectionDataUser = false
    }
  },
  methods: {
    passEvent_toggleTheme() {
        this.$emit('passEvent_toggleTheme')
    },
    ToggleForms(event) {
        const button = event.target

        button.classList.toggle('viewForms');

        if(button.classList.contains('viewForms')) {
            //password
            this.showForms = false
            this.nameBtnForms = 'Dados da conta'
        } else {
            //data
            this.showForms = true
            this.nameBtnForms = 'Trocar de senha'
        }
    },
    applyCpfMask(value) {
        value = value.replace(/[^\d]/g, "");

        return value
            .replace(/^(\d{3})(\d)/, "$1.$2")
            .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    },
  },

}
</script>

<template>

  <NavBar 
  :pass_route="pass_route"
  @passEvent_toggleTheme="passEvent_toggleTheme"
  :valueIconsCategory="valueIconsCategory"
  />

  <div id="containerAccountInformation" v-if="showSectionDataUser">
    <div class="container_main_center">
        <div id="container_groupInfor">
          <aside id="containers_title">
            <div>
              <div id="box_iconUser">
                <IconUser />
              </div>
              <h2>Meus dados</h2>
            </div>
            
            <div id="box_btn">
              <ButtonToggleForm 
              :TextContentBtn="nameBtnForms"
              :showIcon="true"
              @click="ToggleForms"
              />
            </div>
          </aside>

          <aside id="containers_formData">
            <FormDataAccount 
            v-if="showForms"
            :applyCpfMask="applyCpfMask"
            />

            <FormChangePassword v-else/>
          </aside>
        </div>
    </div>
  </div>

  <PageFalseToken v-else/>

  <TheFooter />

</template>

<style scoped>
#containerAccountInformation {
  border: 3px solid rgb(255, 255, 255);
  width: 100vw;
  min-height: 70vh;
  padding-top: 9rem;
  background-color: var(--background--strong);
  display: flex;
  align-items: center;

}

#container_groupInfor {
  /* border: 3px solid blue; */
  width: 100%;
  min-height: 60vh;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
#containers_title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#containers_title > div {
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--color--text);
}
#box_iconUser {
  width: 5vw;
}
#containers_title > div > h2 {
  font-size: 2.5vw;
  font-weight: 100;
}
#box_btn {
  /* border: 2px solid #fff; */
  display: flex;
  justify-content: flex-end;
}
#containers_formData {
  /* border: 2px solid red; */
  width: 100%;
}


</style>
