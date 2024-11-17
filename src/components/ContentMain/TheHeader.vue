<script>
import NavBar from '../ContentHeader/NavBar.vue'

export default {
    name: 'TheHeader',
    components: { NavBar },
    data() {
        return {
            name: 'Carlos'
        }
    }
}
</script>

<template>
    <NavBar :teste="name"/>

    <header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero ipsa laborum, iure ad vitae nisi facere maiores. Neque debitis error voluptas quo architecto ex laborum. In aperiam deserunt quam.
        Facilis quo, dolores veritatis hic explicabo praesentium molestias quis vero quos enim, ea dolorem. Et, consequuntur? Laborum in nihil vel nulla libero non id eligendi, quia quaerat quasi totam quis.
        Assumenda, aut. Aspernatur amet inventore veritatis itaque minus maxime laudantium perferendis ratione nam modi, est quo quos corrupti. Suscipit numquam ut quos exercitationem labore cum tempore repellat. Nam, sunt nemo!
        Natus eveniet veritatis eum consequatur molestias excepturi corrupti qui earum nulla nobis tenetur doloremque nisi quis nam animi, fugit rerum possimus debitis ipsam optio amet eaque aliquid autem quasi. Odit!
        Soluta iusto nisi consequatur corrupti aperiam. Tempore obcaecati ipsum labore? Eveniet, commodi iusto ipsa voluptas earum velit iure? Nostrum dolorum tempore consequatur numquam excepturi corporis asperiores maiores incidunt tempora provident!
        Est, consequatur, saepe inventore, provident itaque corrupti fugiat omnis nesciunt veniam et aut voluptas fuga culpa commodi deleniti minima neque molestias recusandae ipsa sapiente. Blanditiis tempora sapiente nihil quas officia.
        Accusantium necessitatibus at reprehenderit facilis veritatis alias natus quis, nam nesciunt blanditiis eaque eos unde minima perspiciatis tempora distinctio architecto rerum provident aliquid nisi odit cupiditate voluptatibus nihil. Fuga, ad.
        Est illo vitae magnam quidem animi nihil, quae dolore harum aliquam sit provident quas eum a esse eligendi asperiores nemo, dolor exercitationem ipsam aliquid ipsum. Tempora perferendis vitae facere quaerat.
        Inventore totam officiis deleniti quam, ducimus, explicabo, earum sit consequuntur qui nemo possimus itaque sequi. Perspiciatis dolorem accusamus facilis iste reprehenderit. Recusandae nesciunt optio assumenda quasi minus ea, nisi illo!
        Veniam tempore totam rem iusto alias beatae non rerum tempora ut. Nostrum nesciunt ex eos natus voluptas sed tempore at asperiores veniam quaerat consequatur possimus nam, quod, hic unde exercitationem.
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding-top: 8rem;
}
</style>