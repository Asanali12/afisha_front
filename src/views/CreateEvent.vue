<template>
<div class="main-div-event">
  <div class="container-fluid gradient-back-header-only">
    <Header/>
  </div>
  <div class="container event-container">
    <form>
        <div class="form-group">
            <label>
                Title
            </label>
            <input type="text" class="form-control"  placeholder="title" v-model="title">
        </div>
        <div class="form-group">
            <label>
                Description
            </label>
            <input type="text" class="form-control"  placeholder="description" v-model="description">
        </div>
        <div class="form-group">
            <label>
                Age restriction
            </label>
            <input type="number" class="form-control"  placeholder="age" v-model="age">
        </div>
        <div class="form-group">
            <label>
                Beginning
            </label>
            <input type="date" class="form-control" v-model="beginning">
        </div>
        <div class="form-group">
            <label>
                Ending
            </label>
            <input type="date" class="form-control" v-model="ending">
        </div>
        <div class="form-group">
            <label>
                Number of participants
            </label>
            <input type="number" class="form-control"  placeholder="participants" v-model="participants">
        </div>
        <div class="form-group">
            <label>
                Poster
            </label>
            <input type="text" class="form-control" v-model="poster">
        </div>
        <button type="button" class="btn btn-success" @click="createEvent">Create</button>
    </form>
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
      title: "",
      description: "",
      age: 0,
      beginning: null,
      ending: null,
      participants: 0,
      poster: null
    }
  },
  components:{
    Header
  },
  mounted () {
    if (this.$store.getters.getRole !== "ORGANIZER"){
        console.log(this.$store.getters.getRole)
        this.$router.push('/')
    }
  },
  methods: {
      createEvent () {
          axios
          .post(
              "/events/add_event/",
              {
                  "id": 0,
                  "title": this.title,
                  "ageRestriction": this.age,
                  "description": this.description,
                  "date": this.stringDate,
                  "numberParticipants": this.participants.toString(),
                  "posterUrl": this.poster,
                  "organizerEmail": this.$store.getters.getEmail,
                  "participants": [],
                  "status": "NOT_APPROVED",
                  "eventPicture": ""
              }
              ).then( (resp) => {
                  console.log(resp)
            })
      }
  },
  computed: {
      stringDate () {
          console.log(this.beginning)
          console.log(this.ending)
          return this.beginning + "-" + this.ending

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