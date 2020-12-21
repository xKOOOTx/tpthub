<template>
  <div class="v-table">
    <div class="filter">
      <div class="filter__block">
        <label class="amount">
          <p>{{ $t('facts') }}</p>
          <input v-model.number="amount" type="number">
          <div class="filter__button"
               @click.prevent="getAmount(amount)">{{$t('confirm')}}
          </div>
        </label>
        <div class="properties">
          <div class="properties__filter filter_type">
            <p>{{ $t('type') }}</p>
            <button
                class="text_btn"
                @click="hidden = this.hidden"
                v-bind:class="isHidden"
            >{{hidden?$t('hide'):$t('show')}}</button>
          </div>
          <div class="properties__filter filter_text">
            <p>{{$t('fact')}}</p>
            <button
                class="text_btn"
                @click="visible=!visible"
            >{{hidden?$t('hide'):$t('show')}}</button>
          </div>
          <div class="properties__filter filter_createDate">
            <p>{{ $t('createDate') }}</p>
            <button
                class="text_btn"
                @click="visible=!visible"
                v-bind="this.createdAt"
            >{{hidden?$t('hide'):$t('show')}}</button>
          </div>
          <div class="properties__filter filter_updateDate">
            <p>{{$t('updateDate')}}</p>
            <button
                class="text_btn"
                @click="visible=!visible"
                v-bind="this.updatedAt"
            >{{hidden?$t('hide'):$t('show')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="v-table__header">
      <p>{{ $t('type') }}</p>
      <p>{{ $t('fact') }}</p>
      <p>{{$t('createDate')}}</p>
      <p>{{$t('updateDate')}}</p>
    </div>
    <div class="v-table__body">
      <vTableRow
          v-for="users in paginatedUsers"
          :key="users.id"
          :row_data="users"
      />
    </div>
    <div class="v-table__pagination">
      <div class="page"
        v-for="page in pages"
        :key="page"
        :class="{'page-active': page === pageNumber}"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from './v-table-row'


export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      amount: 2,
      usersPerPage: 2,
      pageNumber: 1,
      visible: true
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.users_data.length/this.usersPerPage);
    },
    paginatedUsers() {
      let from = (this.pageNumber-1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page
    },
    getAmount(usersPerPage) {
      this.usersPerPage = usersPerPage;
    },
  }
}
</script>

<style lang="scss" scoped>
.v-table {
  max-width: 1200px;
  margin: 0 auto;
  &__header {
    display: flex;
    justify-content: space-around;

    & p {
      padding: 16px 16px;

      text-align: left;
      flex-basis: 25%;
      text-transform: capitalize;

      border-bottom: 1px solid #ccc;
    }
  }
}
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 30px;
}
.page {
  padding: 8px 12px;
  border: 1px solid #ccc;

  margin-right: 10px;

  &:hover,
  &-active {
    background-color: #ccc;
    color: #fff;

    cursor: pointer;
  }
}
.filter__block {
  display: flex;
  margin-top: 30px;
  justify-content: space-around;

  & input {
    outline: none;
    border: 1px solid #cccccc;
    padding: 10px;
    min-width: 100%;
    max-width: 30px;
    margin-top: 10px;
  }
}
.amount {
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  align-items: center;
}
.filter__button {
  display: inline-block;
  width: 100%;
  margin: 10px auto;
  padding: 10px 15px;

  text-transform: capitalize;

  border: 1px solid #ccc;

  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
}
.properties {
  flex-basis: 70%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 10px;

  border: 1px solid #ccc;
  &__filter p {
    text-transform: capitalize;
  }
  & button {
    padding: 5px 15px;
    margin-top: 10px;

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
}
</style>