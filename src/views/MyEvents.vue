<template>
<div class="main-div">
  <div class="container-fluid gradient-back-header-only">
    <Header/>
  </div>
  <div class="container page-name mt-5">
      <span>My Events</span>
  </div>
  <div class="container">
    <div class="event-card-wrapper" v-for="event in events" :key="event.id">
      <event-card :posterUrl="event.posterUrl" :name="event.title" :date="event.date"/>
    </div>
  </div>
</div>
</template>

<script>
//import axios from "axios";
import Header from "@/components/Header.vue";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "MyEvents",
  data () {
    return {
      events : [
        {
           "title": "Super bdsm event",
           "ageRestriction": 18,
           "description": "Успей сделать МТС проект не порвав сраку",
           "date": "28.11.2021-04.12.2021",
           "numberParticipants": 10,
           "posterUrl": "test"
        },
        {
           "title": "Super bdsm event",
           "ageRestriction": 18,
           "description": "Успей сделать МТС проект не порвав сраку",
           "date": "28.11.2021-04.12.2021",
           "numberParticipants": 10,
           "posterUrl": "test"
        },
        {
           "title": "Super bdsm event",
           "ageRestriction": 18,
           "description": "Успей сделать МТС проект не порвав сраку",
           "date": "28.11.2021-04.12.2021",
           "numberParticipants": 10,
           "posterUrl": "test"
        },
        {
           "title": "Super bdsm event",
           "ageRestriction": 18,
           "description": "Успей сделать МТС проект не порвав сраку",
           "date": "28.11.2021-04.12.2021",
           "numberParticipants": 10,
           "posterUrl": "test"
        },
        {
           "title": "Super bdsm event",
           "ageRestriction": 18,
           "description": "Успей сделать МТС проект не порвав сраку",
           "date": "28.11.2021-04.12.2021",
           "numberParticipants": 10,
           "posterUrl": "test"
        },
      ]
    }
  },
  components:{
    Header,
    EventCard
  },
  mounted () {
    /*axios
      .get(
        "http://192.168.1.132:8080/events/get_all",
      ).then( (resp) => {
        this.events = resp.data
      })*/
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