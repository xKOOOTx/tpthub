<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hello__text">
      <p class="hello__text_p">
        <i18n path="guideTxt">
          <br place="break" />
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener" place="action">{{ $t('guideDocTxt') }}</a>
        </i18n>
      </p>
    </div>
    <h3>{{ $t('pluginsTxt') }}</h3>
    <ul>
      <li><a href="https://cli.vuejs.org/ru/core-plugins/babel.html">babel</a></li>
      <li><a href="https://cli.vuejs.org/ru/core-plugins/eslint.html">eslint</a></li>
      <li><a href="#">{{ $t('someLink1') }}</a></li>
      <li><a href="#">{{ $t('someLink2') }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

.hello {
  text-align: center;
  &__text {
    display: flex;
    justify-content: center;
    &_p {
      max-width: 600px;

      & a {
        display: block;
        margin-top: 10px;
      }
    }
  }
}
h3 {
  margin-top: 10px;
}
ul{
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  & li {
    list-style: none;
    margin: 5px;
    & a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}


</style>