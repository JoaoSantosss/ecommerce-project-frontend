<script>
export default {
    name: 'NavTopHeader'
}
</script>

<template>
    <div id="nav_top_header">
        <div id="container_logo">
            <img src="../../public/Logo + Letreiro (1).png" alt="">
        </div>
        
        <div id="container_input_search">
            <input type="text" placeholder="Search for your product">
        </div>

        <div id="container_cart">
            <ion-icon name="cart-outline"></ion-icon>
            <p id="counter_cart">12</p>
        </div>
    </div>
</template>


<style>
#nav_top_header {
    /* border: 1px solid yellow; */
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #1A1723;
}

#container_logo {
    /* border: 1px solid red; */
    width: 25%;
    height: 100%;
    
}

#container_logo > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#container_input_search {
    /* border: 1px solid red; */
    width: 60%;
}

#container_input_search > input {
    padding: 15px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 20px;
    background-color: #343A40;
    color: #ffffff;
}

#container_cart {
    /* border: 2px solid blue; */
    width: 7%;
    display: flex;
    justify-content: center;
}
#container_cart > ion-icon {
    color: #ffffff;
    font-size: 35px;
}

#counter_cart {
    background-color: #9061FF;
    color: #ffffff;
    font-weight: bold;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-10px);
    
}
</style>