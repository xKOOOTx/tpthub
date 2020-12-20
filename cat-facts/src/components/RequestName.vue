<template>
  <div>
    <hr>
    {{ info }}
<!--    <div v-for="(el,index) in info"-->
<!--         :key="index">-->
<!--      <div class="number" v-html="el.type"></div>-->
<!--      <div class="number" v-html="el.text"></div>-->
<!--    </div>-->
  </div>
</template>

<script>
const axios = require('axios').default;
let API = 'https://github.com/alexwohlbruck/cat-facts/tree/master/docs/endpoints'
export default {
  name: "RequestName",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
        .get(`${API}/users`)
        .then(response => (this.info = response))
        .catch(error => console.log(error))
  },
}
</script>

<style scoped>

</style>