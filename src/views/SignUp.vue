<template>
<div class="main-div">
  <div class="container-fluid gradient-back-full-page">
    <Header/>
    <div class="row">
      <div class="col d-flex flex-row-reverse no-padding">
        <img :src="require('@/assets/mic-logo.png')" class="mic-logo" alt="Error"/>
      </div>
      <div class="col no-padding" style="position: relative">
        <h1 class="name-text">innofisha</h1>
      </div>
    </div>
    <div class="container w-50 mt-5">
      <div class="from-div">
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col">
                    <div class="form-group input-div">
                        <input type="text" class="form-control form-text-field" id="name" aria-describedby="emailHelp" placeholder="name" v-model="form.firstName">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group input-div">
                        <input type="text" class="form-control form-text-field" id="surname" aria-describedby="emailHelp" placeholder="surname" v-model="form.secondName">
                    </div>
                </div>
            </div>
            <div class="form-group input-div">
                <input type="text" class="form-control form-text-field" id="login" aria-describedby="emailHelp" placeholder="email" v-model="form.email">
            </div>
            <div class="form-group input-div">
                <input type="password" class="form-control form-text-field" id="password" placeholder="password" v-model="form.password">
            </div>
            <div class="form-group input-div">
                <input type="password" class="form-control form-text-field" id="passwordRepeat" placeholder="repeat password" v-model="passwordRepeat">
            </div>
            <div class="alert alert-danger" role="alert" v-if="!passwordsMatch">
              Please provide matching passwords
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-success sign-in-button" @click="submit">Sign Up</button>
                </div>
                <div class="col d-flex flex-row-reverse">
                    <router-link to="sign-in" class="no-account-link">Already have an account</router-link>
                </div>
            </div>
        </form>
      </div>
  </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/Header.vue";


export default {
  name: "SignUp",
  data () {
    return {
      form: {
        firstName:"",
        secondName:"",
        email:"",
        password:"",
        userEvents : {
          events : []
        },
        role: "ADMIN"
      },
      passwordRepeat: "",
      showError: false
    }
  },
  components:{
    Header
  },
  async mounted () {
    
  },
  methods: {
    
    async submit() {
      try {
        await this.$store.dispatch('SignUp', this.form)
        this.$router.push("/")
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
  computed: {
    passwordsMatch () {
      return this.form.password === this.passwordRepeat
    }
  }
};
</script>

<style>
.btn-success, .btn-success:active, .btn-success:visited {
    background-color: #8367C7 !important;
    border-radius: 0.5rem !important;
    border: 0 !important;
}
.btn-success:hover{
    background-color: #99d98c !important;
    color: black !important;
}
.no-account-link{
    color: #000000;
    font-size: 32px;
    margin-top: 2%
}
.sign-in-button{
    margin-top: 2%;
    width: 180px;
    height: 40px
}
.input-div{
    margin-bottom: 2%;
}
.from-div{
    background-color: white;
    border-radius: 1.5rem;
    padding: 5%
}
.form-text-field{
    height: 48px;
    font-size: 32px;
}
.gradient-back-full-page{
  background-image: linear-gradient(to right, #8367C7 , #B3E9C7);
  height: 100vh;
  position: relative;
}
.mic-logo{
  width: 250px;
  height: auto;
}
.name-text{
  position:absolute;
  top: 40%;
  font-size: 72px;
}
.no-padding{
  padding-left: 0;
  padding-right: 0;
}
.search-bar-div{
  margin-left: 7.5%;
  width: 100%;
  position: absolute;
  bottom: -40px;
}
.event-cards{
  margin-top: 5%
}
.event-card-wrapper{
  margin-left: 2%;
  display: inline-block;
  max-height: 500px;
  margin-bottom: 0;
  padding: 0;
  margin-top: 2%
}
.main-div{
  overflow: hidden
}
</style>