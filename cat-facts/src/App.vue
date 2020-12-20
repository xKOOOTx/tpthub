<template>
  <div id="app" class="center">
    <ul>
      <li class="list"><a href="#" class="link" @click="setLocale('en')">en</a></li>
      <li class="list"><a href="#" class="link" @click="setLocale('ru')">ru</a></li>
    </ul>
    <img src="./assets/logo.png" alt="Vue logo">
    <HelloWorld :msg="$t('welcomeMsg')"/>
    <RequestFacts />
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld'
import RequestFacts from "@/components/RequestFacts";
import '@/assets/style/style.scss'

export default {
  name: 'app',
  components: {
    HelloWorld,
    RequestFacts
  },
  methods: {
    setLocale(locale) {
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 100px;
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

  border: 1px solid transparent;

  transition: all .2s ease-in;
  &:hover {
    //text-decoration: underline;
    border: 1px solid #ccc;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.35);
    background-color: darkseagreen;
  }

}
</style>