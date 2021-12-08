<template>
  <h1>{{userName}}</h1>
  <p><span class="grey-text">email:</span> {{userEmail}}</p>
  <p><span class="grey-text">role:</span> {{userStatus}}</p>
</template>

<script>
export default {
    name: 'UserInfo',
    data () {
        return {
            userName: this.name,
            userEmail: this.email,
            userStatus: this.status
        }
    },
    props:{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>