<template>
  <div class="v-table-row">
    <div class="row row__type">{{ row_data.type }}</div>
    <button
        @click="visible=!visible"
        >{{visible?$t('hide'):$t('show')}}</button>
    <div class="row row__text"
         v-show="this.visible">{{row_data.text}}</div>
    <div class="row row__creationDate">{{ row_data.createdAt }}</div>
    <div class="row row__updateDate">{{ row_data.updatedAt }}</div>
  </div>
</template>

<script>

export default {
  name: "v-table-row",
  props: {
    row_data:{
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      visible: true
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.v-table-row {
   display: flex;
   justify-content: space-around;
  border-bottom: 1px solid #ccc;

}
.row {
  flex-basis: 25%;
  padding: 10px 16px;
  text-align: left;
}
button {
  padding: 35px 15px;
  margin: 10px;

  text-transform: capitalize;
  font-family: inherit;

  outline: none;
  border: 1px solid #ccc;

  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #ccc;
  }
}
//.hidden {
//  display: none;
//}
</style>