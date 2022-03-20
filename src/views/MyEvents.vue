<template>
<div class="main-div">
  <div class="container-fluid gradient-back-header-only">
    <Header/>
  </div>
  <div class="container mt-5">
    <div class="page-name">Profile</div>
    <UserInfo :name="this.$store.getters.getName + ' ' + this.$store.getters.getSurname" :email="this.$store.getters.getEmail" :status="textRole"/>
    <div v-if="textRole === 'user'">
      <button type="button" class="btn btn-success sign-in-button" @click="applyForOrg" :disabled="appliedForOrg">Become Organizer</button>
    </div>
    <div v-if="textRole === 'organizer'">
      <router-link class="btn btn-success sign-in-button" to="/create-event">Create Event</router-link>
    </div>
    <div>
      <button type="button" class="btn btn-success sign-in-button" @click="logOut">Log Out</button>
    </div>
  </div>
  <div class="container mt-5 text-center">
      <h1>My Events</h1>
  </div>
  <div class="container" v-if="(textRole === 'user')">
    <div class="event-card-wrapper" v-for="event in events" :key="event.id">
      <event-card :posterUrl="event.posterUrl" :name="event.title" :date="event.date" :id="event.id"/>
    </div>
  </div>
  <div class="container" v-if="(textRole === 'organizer')">
    <div class="event-card-wrapper" v-for="event in organizerEvents" :key="event.id">
      <event-card :posterUrl="event.posterUrl" :name="event.title" :date="event.date" :id="event.id"/>
    </div>
  </div>
  <div class="container" v-if="(textRole === 'admin') ">
    



    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-req-events-tab" data-bs-toggle="tab" data-bs-target="#nav-req-events" type="button" role="tab" aria-controls="nav-req-events" aria-selected="true">Requested Events</button>
        <button class="nav-link" id="nav-req-users-tab" data-bs-toggle="tab" data-bs-target="#nav-req-users" type="button" role="tab" aria-controls="nav-req-users" aria-selected="false">Requested Users</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">

      <div class="tab-pane fade show active" id="nav-req-events" role="tabpanel" aria-labelledby="nav-req-events-tab">
        <div class="container-fluid">
          <div class="event-card-wrapper" v-for="event in adminEventSubmissions" :key="event.id">
            <event-card :posterUrl="event.posterUrl" :name="event.title" :date="event.date" :id="event.id"/>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="nav-req-users" role="tabpanel" aria-labelledby="nav-req-users-tab">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="submission in adminUserSubmissions" :key="submission.id">
              <th scope="row">{{submission.id}}</th>
              <td>{{submission.userEmail}}</td>
              <td>
                <button class="btn btn-info" @click="submitUser(submission.id, submission.userEmail)">Accept</button>
                <button class="btn btn-danger" @click="rejectUser(submission.id)"> Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import EventCard from "@/components/EventCard.vue";
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "MyEvents",
  data () {
    return {
      events : [
      ],
      appliedForOrg: null,
      role: "",
      adminUserSubmissions: [],
      adminEventSubmissions: [{
          "id": 0,
          "title": "-",
          "ageRestriction": 18,
          "description": "-",
          "date": "28.11.2021-04.12.2021",
          "numberParticipants": 10,
          "posterUrl": ""
      }],
      organizerEvents: []
    }
  },
  components:{
    Header,
    EventCard,
    UserInfo
  },
  async mounted () {
    const email = this.$store.getters.getEmail
    console.log("login check", email)
    console.log("role check", this.$store.getters.getRole)
    await axios
      .get(
        "/users/get_user_events/"+email,
      ).then( (resp) => {
        this.events = resp.data
      })
    await axios
      .get(
        "/users/all_submissions/"
      ).then( (resp) => {
        let submissions = resp.data
        submissions = submissions.filter(function (el) {
          return el.userEmail === email
        });
        console.log(submissions)
        this.appliedForOrg = (submissions.length > 0)
      })
    //admin part

    if(this.textRole === 'admin'){
      this.getAdminSubmissions()
      this.getAdminEventSubmissions()
    }
    if(this.textRole === 'organizer'){
      this.getOrganizerEvents()
    }
  },
  methods:{
    async logOut () {
      try {
        await this.$store.dispatch('LogOut')
        this.$router.push("/")
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
    applyForOrg () {
      axios
      .post(
        "/users/apply_for_organizer/"+this.$store.getters.getEmail,{}
      ).then( (resp) => {
        console.log(resp)
      })
    },

    async getOrganizerEvents () {
      const email = this.$store.getters.getEmail
      let events = []
      await axios
      .get(
        "/events/get_all/"+email
      ).then( (resp) => {
        events = resp.data
      } )
      this.organizerEvents = events
      console.log(this.organizerEvents)
    },

    async getAdminSubmissions(){
      let submissions = []
      await axios
      .get(
        "/users/all_submissions/"
      ).then( (resp) => {
        submissions = resp.data
      } )
      this.adminUserSubmissions = submissions
    },

    async getAdminEventSubmissions(){
      let submissions = []
      await axios
      .get(
        "/events/get_not_approved"
      ).then( (resp) => {
        submissions = resp.data
      } )
      this.adminEventSubmissions = submissions
    },

    async submitUser (submissionId, email) {
      await axios
      .post(
        "/users/approve_organizer/"+email+"/"+submissionId.toString(),{}
      ).then( (resp) => {
        console.log(resp)
        this.getAdminSubmissions()
      })

    },

    async rejectUser (submissionId) {
      await axios
      .post(
        "/users/cancel_organizer/"+submissionId.toString(),{}
      ).then( (resp) => {
        console.log(resp)
        this.getAdminSubmissions()
      })
    },
  },
  computed:{
    textRole () {
      if (this.$store.getters.getRole === "ROLE_USER"){
        return "user"
        //return "admin"
      }else{
        if (this.$store.getters.getRole === "ORGANIZER") {
          return "organizer"
          //return "admin"
        }else{
          if (this.$store.getters.getRole === "ADMIN") {
            return "admin"
          }else{
            return "ERROR"
          }
        }
      }
    }
  }
};
</script>

<style>
.page-name{
    text-align: center;
    font-size: 60px;
}
.gradient-back-header-only{
  background-image: linear-gradient(to right, #8367C7 , #B3E9C7);
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