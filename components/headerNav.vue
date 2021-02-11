<template>
  <nav class="cf">
    <ul>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">about</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
nav {
  display: table-cell;
  height: 100%;
  vertical-align: middle;
  ul {
    float: right;
    li {
      list-style-type: none;
      margin-left: 15px;
      float: left;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
