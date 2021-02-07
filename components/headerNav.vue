<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">about</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
nav {
  color: #fff;
  ul {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0;
    li {
      list-style-type: none;
      margin-left: 15px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
