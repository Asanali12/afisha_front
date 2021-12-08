<template>
<div class="main-div-event">
  <div class="container-fluid gradient-back-header-only">
    <Header/>
  </div>
  <div class="container event-container">
      <div class="row">
          <div class="col-3">
              <img :src="this.event.posterUrl" alt="Couldn't load the poster" class="event-poster-img">
          </div>
          <div class="col event-text-col">
              <div class="event-info-table">
                  <div class="event-data">
                      <p class="event-name">{{this.event.title}}</p>
                      <p class="event-participants"><span class="grey-text">Number of participants:</span> {{this.currentParticipants}}/{{this.event.numberParticipants}}</p>
                  </div>
                  <div class="event-date">
                      <p class="grey-text">From-Till:</p>
                      <p>{{this.event.date}}</p>
                      <p v-if="role === 'ROLE_USER'"> <button type="button" class="btn btn-success sign-in-button" @click="joinEvent" :disabled="joinDisabled">Join</button> </p>
                      <p v-if="role === 'ORGANIZER'">Status: {{this.event.status}}</p>
                      <p v-if="role === 'ADMIN'"><button type="button" class="btn btn-success sign-in-button" @click="approve" :disabled="joinDisabled">Approve</button></p>
                      <p v-if="role === 'ADMIN'"><button type="button" class="btn btn-success sign-in-button" @click="reject" :disabled="joinDisabled">Reject</button></p>
                  </div>
              </div>
              <div class="event-description">
                  <p class="grey-text">About this event:</p>
                  <span>{{this.event.description}}</span>
              </div>
          </div>
      </div>

  </div>
</div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  name: "Event",
  data () {
    return {
      event: {
        ageRestriction: 19,
        date: "",
        description: "",
        id: 0,
        numberParticipants: "",
        posterUrl: "",
        status: "",
        title: "",
        organizerEmail: ""
      },
      currentParticipants: 0,
      joinDisabled: false,
      role: ""
    }
  },
  components:{
    Header
  },
  async mounted () {
    await axios
      .get(
        "/events/"+this.$route.params.id ,
      ).then( async (resp) => {
        this.event = resp.data
        console.log(this.event)
        let participants = []
        await axios
        .get(
          "/events/"+this.$route.params.id+"/participants" ,
        ).then( (resp) => {
          participants = resp.data
          console.log(this.event)
        })
        this.currentParticipants = participants.length
      })
    //this.role = this.$store.getters.getRole
    this.role = "ADMIN"
    console.log(this.role)
  },
  methods:{
    async approve () {
      await axios.post(
        "/users/approve_event/"+this.event.id,{}
      ).then( (resp) => {
        console.log(resp)
      })
    },

    async reject () {
      await axios.post(
        "/users/cancel_event/"+this.event.id,{}
      ).then( (resp) => {
        console.log(resp)
      })
    },

    async joinEvent(){
      const email = this.$store.getters.getEmail
      await axios.post(
        "/users/join/"+email+"/"+this.event.id,{}
      ).then( (resp) => {
        console.log(resp)
        this.joinDisabled = true
      })
    },
  },
  computed:{
    beginningDate () {
      return this.event.date.split("-")[0]
    },
    endingDate () {
      return this.event.date.split("-")[1]
    },
    isOrganizer(){
      return this.$store.getters.getEmail === this.event.organizerEmail
    }
  }
};
</script>

<style>
.grey-text{
    color: #999999
}
.main-div{
  overflow: hidden
}
.event-poster-img{
    width: 100%;
}
.event-participants{
    font-size: 32px;
}
.event-container{
    margin-top: 7%
}
.event-name{
    font-size: 60px;
}
.event-data{
    display: table-cell
}
.event-date{
    font-size: 24px;
    display: table-cell;
    text-align: right;
    padding-left: 5%
}
.event-info-table{
    display: table;
    width: 100%
}
.event-description{
    font-size: 32px
}
.main-div-event{
  overflow: hidden;
}
</style>