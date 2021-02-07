<template>
  <div class="wrapper">
    <main class="main">
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ publishedAt }}</p>
      <p class="category">{{ category && category.name }}</p>
      <div class="post" v-html="body"></div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://dn-blog.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': '0217a727-1f1d-4c5a-bbef-9bf429a7b3fc' }
      }
    )
    return data
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.post p {
  font-size: 24px;
}
.post img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
