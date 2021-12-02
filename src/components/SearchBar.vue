<template>
  <div>
      <input type="text" class="form-rounded" placeholder="search by event name..."
      :value="text"
      @input="$emit('update:text', $event.target.value)"/>
  </div>
</template>

<script>
export default {
    name: "SearchBar",
    data () {
        return {
            
        }
    },
    props: {
      text: {
        type: String
      }
    },
    emits: ['update:text']
    
}
</script>

<style>
.form-rounded {
  border-radius: 2rem;
  width: 85%;
  outline: none;
  border: none;
  height: 80px;
  padding-left: 5%;
  box-shadow: 3px 3px 3px #999999;
  color: #191919;
  font-size: 24px;
}
</style>