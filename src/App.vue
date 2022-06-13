<template>
<!--  <p>TRA CỨU THÔNG TIN TUYỂN SINH</p>-->
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <div>
    <router-view></router-view>
     <footer >
       <p>Degisn by Ex Nope</p>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer p{
  margin-top: 15%;
  color: grey;
}
</style>
