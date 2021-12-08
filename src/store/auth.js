import axios from 'axios';



axios.defaults.baseURL = 'http://ec2-3-17-146-147.us-east-2.compute.amazonaws.com:8080/'

export const auth = {
  

  state: () => ({
      email: "",
      name: "",
      surname: "",
      role: ""
  }),

  actions: {
    async SignUp({dispatch}, form) {
      await axios.post('users/register', form)
      /*let UserForm = new FormData()
      UserForm.append('email', form.email)
      UserForm.append('password', form.password)*/
      const formData = {
        email : "",
        password : ""
      }
      formData.email = form.email
      formData.password = form.password
      await dispatch('LogIn', formData)
    },
    async LogIn({commit, state}, User) {
      let loginResponse = {}
      console.log(User)
      await axios.post('users/login', User).then((resp) => loginResponse = resp.data)
      const userData = {
        email: loginResponse.email,
        name: loginResponse.firstName,
        surname: loginResponse.secondName,
        role: loginResponse.role
      }
      await commit('setUser', userData)
      console.log(state)
    },
    async LogOut({commit, state}){
      console.log("logout")
      await axios.post('users/logout', {"email": state.email})
      await commit('logOut')
      console.log(state)
    }
  },

  mutations: {
    setUser(state, userData){
      state.email = userData.email
      state.name = userData.name
      state.surname = userData.surname
      state.role = userData.role
    },
    logOut(state){
      state.email = ""
      state.name = ""
      state.surname = ""
      state.role = ""
    },
  },

  getters: {
    getEmail ( state ) {
      return state.email
    },
    getName ( state ) {
      return state.name
    },
    getSurname ( state ) {
      return state.surname
    },
    getRole ( state ) {
      return state.role
    }
  }
}