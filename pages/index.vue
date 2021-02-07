<template>
  <div class="">
    <h1>dn-blog</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
    <p>dn-blogのトップページです。</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://dn-blog.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc' }
      }
    )
    return data
  }
}
</script>
