<template>
<div class="card" style="width: 25rem; border-radius: 1.5rem; position:relative; box-shadow: 2px 3px 2px #999999; border: 0; height: 450px; overflow: clip">
    <img class="card-img-top" :src="require('@/assets/poster2.jpg')" alt="Card image cap" style="border-radius: 1.5rem; object-fit: none; height: 100%">
    <div class="card-body card-content container-fluid">
        <div class="row">
            <div class="col">
                <h5 class="card-title">{{this.eventName}}</h5>
                <p class="card-text date-text">{{this.firstDate}}</p>
            </div>
            <div class="col">
                <router-link :to="'/event/'+this.eventId" class="btn btn-primary event-join-button">Details</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "EventCard",
    data () {
        return {
            poster: this.posterUrl,
            eventName: this.name,
            eventDate: this.date,
            eventId: this.id
        }
    },
    props:{
        posterUrl: {
            type: String,
            required:false,
            default: ""
        },
        name: {
            type: String,
            required:true,
            default: "Error with event name"
        },
        date: {
            type: String,
            required: true,
            default: "21st of December. 1999"
        },
        id: {
            type: Number,
            required: true
        }
    },
    computed:{
        firstDate () {
            return this.eventDate.split("-")[0]
        }
    }
}
</script>

<style>
.event-join-button{
    float: right;
    top: 10%;
    width: 70%;
}
.btn-primary, .btn-primary:active, .btn-primary:visited {
    background-color: #8367C7 !important;
    border-radius: 1.5rem !important;
    border: 0 !important;
}
.btn-primary:hover{
    background-color: #99d98c !important;
    color: black !important;
}
.card-content{
    position:absolute;
    background-color: white;
    width: 100%;
    border-radius: 1.5rem;
    bottom: -2%;
    height: 23%;
}
.date-text{
    color: #999999;
}
</style>