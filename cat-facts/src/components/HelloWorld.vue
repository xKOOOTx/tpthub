<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hello__text">
      <p class="hello__text_p">For a guide and recipes on how to configure / customise this project, checkout the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
      </p>
    </div>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="#">Just some links</a></li>
      <li><a href="#">Just some links</a></li>
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
    margin: 5px
  }
}


</style>