<template>
  <section class="contents">
    <div class="wrapper">
      <div class="post-wrapper">
        <h1 class="title">{{ item.title }}</h1>
        <div class="post-label">
          <p v-if="item.category" class="category">{{ item.category && item.category.name }}</p>
          <p class="date-published">{{ publishedDate() }}</p>
        </div>
        <div v-if="item.main_image" class="image-wrapper">
          <img :src="item.main_image.url" alt="">
        </div>
        <div class="post" v-html="item.body"></div>
      </div>
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
  head() {
    return {
      title: this.item.title,
    }
  },
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
    return {
      item: data
    };
  },
  methods: {
    publishedDate(publishedAt) {
      return new Date(this.item.publishedAt).toLocaleDateString()
    }
  }
}
</script>

<style lang="scss">
.post-wrapper {
  .title {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }
  .post-label {
    margin-bottom: 10px;
    .category {
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
      background-color: #333;
      padding: 8px 10px;
      display: inline-block;
      margin-right: 5px;
    }
    .date-published {
      font-size: 14px;
      display: inline-block;
    }
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
}
.home-back {
  margin-top: 40px;
  a {
    font-weight: bold;
  }
}
</style>
