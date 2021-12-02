<template>
<div class="main-div-event">
  <div class="container-fluid gradient-back-header-only">
    <Header/>
  </div>
  <div class="container event-container">
      <div class="row">
          <div class="col-3">
              <img :src="require('@/assets/poster.jpg')" alt="Couldn't load the poster" class="event-poster-img">
          </div>
          <div class="col event-text-col">
              <div class="event-info-table">
                  <div class="event-data">
                      <p class="event-name">Super bdsm party</p>
                      <p class="event-participants"><span class="grey-text">Number of participants:</span> 20/120</p>
                  </div>
                  <div class="event-date">
                      <p><span class="grey-text">From:</span> 20th september</p>
                      <p><span class="grey-text">Till:</span> 21 December</p>
                  </div>
              </div>
              <div class="event-description">
                  <p class="grey-text">About this event:</p>
                  <span>This event is organized by Innopolis University to collect money for charity purposes. All the financies from this event are goint to fund local students community.</span>
              </div>
          </div>
      </div>

  </div>
</div>
</template>

<script>
//import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  name: "Event",
  data () {
    return {
      
    }
  },
  components:{
    Header
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