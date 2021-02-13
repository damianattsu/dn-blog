<template>
  <section class="contents">
    <div class="wrapper">
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ new Date(publishedAt).toLocaleDateString() }}</p>
      <p class="category">{{ category && category.name }}</p>
      <div v-if="main_image" class="image-wrapper">
        <img :src="main_image.url" alt="">
      </div>
      <div class="post" v-html="body"></div>
      <div class="home-back">
        <nuxt-link to="/">
          戻る
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      main_image: ''
    }
  },
  async asyncData({ params, $config }) {
    const { data } = await axios.get(
      `https://dn-blog.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': $config.apiKey }
      }
    )
    return data
  }
}
</script>

<style lang="scss">
.title {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
}
.publishedAt {
  font-size: 14px;
  margin-bottom: 10px;
}
.image-wrapper {
  margin-bottom: 20px;
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
}
.post {
  & > h1 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 40px 0 20px;
  }
  & > h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }
  & > img {
    max-width: 100%;
    display: block;
    height: auto;
  }
  & > pre {
    background-color: #333;
    padding: 15px 15px;
    margin-top: 20px;
    code {
      color: #fff;
    }
  }
}
.home-back {
  margin-top: 40px;
}
</style>
