<template>
  <div id="app">
    <ul>
      <li class="list"><a href="#" class="link" @click="setLocale('en')">en</a></li>
      <li class="list"><a href="#" class="link" @click="setLocale('ru')">ru</a></li>
    </ul>
    <v-table
      :users_data="USERS"
    />
  </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table'

export default {
  name: 'app',
  components: {
    vTable,
  },
  data: () => {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'USERS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_USERS_FROM_API'
    ]),
    setLocale(locale) {
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  },
  mounted() {
    this.GET_USERS_FROM_API()
  }
}
</script>
<style lang="scss">
#app {
  font-family: -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  Oxygen,
  Ubuntu,
  Cantarell,
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 5px 0;
}
ul {
  display: flex;
  justify-content: center;
}

.list {
  list-style: none;
}
.link {
  display: block;
  text-decoration: none;
  padding: 5px 10px;
  margin: 5px;

  font-family: inherit;
  color: inherit;

  border: 1px solid #ccc;

  transition: all .2s ease-in;

  &:hover {
    border: 1px solid #ccc;
    background-color: #ccc;
    color: #fff;
  }
}
</style>