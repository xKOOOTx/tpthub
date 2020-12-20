<template>
  <div class="RequestFacts">
    <hr>
    <div v-for="(el,index) in info"
      :key="index" class="table">
      <div class="table__row_type" v-html="`${index+1}.${el.type}`" ></div>
      <div class="table__row_textBlock">
        <div class="table__row_textBlock-text" v-html="el.text"></div>
        <div class="table__row_dateBlock">
          <div class="table__row_dateBlock-createDate"
               v-html="`Updated at: ${el.updatedAt}`"></div>
          <div class="table__row_dateBlock-updateDate" v-html="`Created at: ${el.createdAt}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const axios = require('axios').default;

let API = 'https://cat-fact.herokuapp.com'

export default {
  name: "RequestFacts",

  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
        .get(`${API}/facts`)
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))
  },
}
</script>

<style lang="scss" scoped>
  .RequestFacts {
    padding: 20px 0;
  }
  .table {
    display: flex;

    margin: 20px;
    &__row {
      &_type {
        padding: 20px 12px;

        font-size: 15px;
        align-self: center;
        text-transform: capitalize;
        border: 1px solid black;
        border-right: none;
      }
      &_textBlock {
        display: flex;
        flex-direction: column;

        width: 100%;
        border: 1px solid black;
        &-text {
          flex: 1;
        }
      }
      &_dateBlock {
        display: flex;
        justify-content: space-around;

      }
    }
  }
</style>