<script>
import NavBar from './NavBar.vue';
import NavTopHeader from './NavTopHeader.vue';

export default {
    name: 'TheHeader',
    components: {
        NavBar,
        NavTopHeader
    }
}
</script>

<template>

<NavBar/>

<header>

    <div id="container_header">

        <NavTopHeader/>
        
    </div>

</header>

</template>


<style>
header {
    background-color: #1E1B29;
    width: 100vw;
    min-height: 100vh;
    display: flex;
}

#container_header {
    width: 80%;
    margin-left: 10%;
    /* border: 1px solid red; */
    background-color: #29282e59;
    box-shadow: 1px 1px 30px #ffffff0a;
}


</style>
