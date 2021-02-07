<template>
  <section class="contents">
    <div class="wrapper">
      <h1>dn-blog</h1>
      <ul>
        <li v-for="content in contents" :key="content.id">
          <nuxt-link :to="`/${content.id}`">
            {{ content.title }}
          </nuxt-link>
        </li>
      </ul>
      <p>dn-blogのトップページです。</p>
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://dn-blog.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc' }
      }
    )
    return data
  }
}
</script>

<style>
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
</style>
