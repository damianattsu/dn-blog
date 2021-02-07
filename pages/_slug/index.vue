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

<style lang="scss">
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

.post {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
    background-color: #eee;
    padding: 10px 20px;
    border-radius: 5px;
  }
  & > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }
  & > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
    img {
      max-width: 100%;
      display: block;
      height: auto;
    }
  }
  & > ol {
    list-style-type: decimal;
    list-style-position: inside;
  }
}
</style>
