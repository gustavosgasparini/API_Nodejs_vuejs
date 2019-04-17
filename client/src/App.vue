<template>
  <div id="app">
    <router-link to="/">
      <img alt="Vue logo" src="./assets/logo.png">                
    </router-link>
    <h5>TESTE BACKEND TILIX</h5> 
  
    <transition name="router-anim" enter-active-class="animated fadeIn">
    <router-view></router-view>
    </transition>

  </div>
</template>

<script>


export default {

}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.7.0";

  img {
    width: 70px;
    margin-top: -10px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    background-color:#f8f9fa;
    width:100%;
    min-height: 100%;
    top:0px;
    left:0px;
  }

</style>
