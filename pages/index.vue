<template>
  <section class="contents">
    <div class="wrapper">
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    const { data } = await axios.get(
      'https://dn-blog.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': $config.apiKey }
      }
    )
    return data
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 20px;
  li {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
