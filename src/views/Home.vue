<template>
<div class="main-div">
  <div class="container-fluid gradient-back">
    <Header/>
    <div class="row">
      <div class="col d-flex flex-row-reverse no-padding">
        <img :src="require('@/assets/mic-logo.png')" class="mic-logo" alt="Error"/>
      </div>
      <div class="col no-padding" style="position: relative">
        <h1 class="name-text">innofisha</h1>
      </div>
    </div>
    <div class="search-bar-div">
      <SearchBar v-model:text="searchString" @input="filteredItems"/>
    </div>
  </div>
  <div class="container event-cards">
    <div class="event-card-wrapper" v-for="event in filteredEvents" :key="event.id">
      <event-card :posterUrl="event.posterUrl" :name="event.title" :date="event.date" :id="event.id"/>
    </div>
  </div>
</div>
</template>

<script>
//import axios from "axios";
import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import EventCard from "@/components/EventCard.vue";

export default {
  name: "Home",
  data () {
    return {
      searchString: "",
      //filteredEvents: [],
      events : [
        {
          "id": 0,
          "title": "Super bdsm event",
          "ageRestriction": 18,
          "description": "Успей сделать МТС проект не порвав сраку",
          "date": "28.11.2021-04.12.2021",
          "numberParticipants": 10,
          "posterUrl": "test"
        },
        {
          "id": 1,
          "title": "Super bdsm event",
          "ageRestriction": 18,
          "description": "Успей сделать МТС проект не порвав сраку",
          "date": "28.11.2021-04.12.2021",
          "numberParticipants": 10,
          "posterUrl": "test"
        },
        {
          "id": 2,
          "title": "Super bdsm event",
          "ageRestriction": 18,
          "description": "Успей сделать МТС проект не порвав сраку",
          "date": "28.11.2021-04.12.2021",
          "numberParticipants": 10,
          "posterUrl": "test"
        },
        {
          "id": 3,
          "title": "Super bdsm event",
          "ageRestriction": 18,
          "description": "Успей сделать МТС проект не порвав сраку",
          "date": "28.11.2021-04.12.2021",
          "numberParticipants": 10,
          "posterUrl": "test"
        },
        {
          "id": 4,
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
    SearchBar,
    EventCard
  },
  mounted () {
    /*axios
      .get(
        "http://192.168.1.132:8080/events/get_all",
      ).then( (resp) => {
        this.events = resp.data
      })*/
      //this.filteredEvents = this.events
  },
  methods:{
    filteredItems () {
      console.log(this.searchString)
    }
  },
  computed:{
    filteredEvents () {
      const ss = this.searchString;
      if(this.searchString.length > 0){
        return this.events.filter(function (el) {
          return el.title.includes(ss)
        });
      }else{
        return this.events
      }
    }
  }
};
</script>

<style>
.gradient-back{
  background-image: linear-gradient(to right, #8367C7 , #B3E9C7);
  height: 511px;
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
  overflow: hidden;
  background-color: #F1F1F1;
  min-height: 100vh;
}
</style>