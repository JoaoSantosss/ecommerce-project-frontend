<script>
export default {
    name: 'PageFalseToken',
}
</script>

<template>
    <div id="caseFalseToken">
        <div class="container_main_center">
            <div id="containerGroup">
                <div id="conatinerText">
                    <h1 id="TextMain">Opa! Parece que você não está logado. Que tal entrar pra gente continuar essa aventura juntos? 🚀</h1>
                    <aside id="containerButtons">

                    </aside>
                </div>
                <div id="conatinerImage">
                    <img src="@/assets/image/personLogin.png" alt="Imagem de storyset no Freepik">
                    <!-- <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-login-no-tablet_20602936.htm#fromView=keyword&page=1&position=12&uuid=a09d3cfc-2da9-40df-869f-06949ce3eb59&new_detail=true">Imagem de storyset no Freepik</a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#caseFalseToken {
  /* border: 4px solid palevioletred; */
  width: 100vw;
  min-height: 90vh;
  padding-top: 9rem;
  background-color: var(--background--strong);
  color: #ffffff;
}
#containerGroup {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#conatinerText {
  width: 50%;
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
#TextMain {
    font-size: 3vw;
    font-weight: 100;
}
#conatinerImage {
    width: 40%;
    /* border: 3px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
}
#conatinerImage > img {
    width: 100%;
    height: 80%;
    object-fit: contain;
}
</style>