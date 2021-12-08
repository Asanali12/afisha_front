<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4">
        <router-link class="nav-item nav-link" to="/">search</router-link>
        <router-link v-if="!checkIfUserLoggedOut" class="nav-item nav-link" to="/my-events">profile</router-link>
        <router-link v-if="checkIfUserLoggedOut" class="nav-item nav-link ms-auto" to="/sign-in">sign in</router-link>
    </nav>
</template>

<script>


export default {
  name: "Header",
  data () {
      return {
          signed: this.$store.getters.getEmail
      }
  },
  mounted () {
      console.log(this.signed)
  },
  computed:{
      checkIfUserLoggedOut(){
          if (this.signed == null || this.signed.length == 0){
              return true
          }else{
              return false
          }
      }
  }
};
</script>

<style>
.navbar a{
    color: #191919;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
}
.navbar a:hover{
    color: #f7f7f7;
}
</style>