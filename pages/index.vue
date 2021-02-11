<template>
  <section class="contents">
    <div class="wrapper">
      <div class="contents-list-wrapper cf">
        <div v-for="content in contents" :key="content.id" class="contents-list point">
          <nuxt-link :to="`/${content.id}`">
            <div :style="{ backgroundImage: `url(${ content.main_image.url })` }" class="contents-list-image">
            </div>
            <h2>
              {{ content.title }}
            </h2>
          </nuxt-link>
        </div>
      </div>
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
  },
  mounted() {
    this.$nextTick(function() {
      const matchHeight = document.getElementsByClassName('point')
      let maxHeight = '0px'
      for (let i = 0; i < matchHeight.length; i++) {
        const height = window.getComputedStyle(matchHeight[i]).height
        if (maxHeight < height) {
          maxHeight = height
        }
      }
      for (let i = 0; i < matchHeight.length; i++) {
        matchHeight[i].style.height = maxHeight
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/app.scss';

.contents-list-wrapper {
  margin: 0 -10px;
  .contents-list {
    float: left;
    width: 33.3333%;
    padding: 0 10px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    @include sp {
      width: 50%;
    }
    a {
      display: block;
      h2 {
        font-size: 16px;
        letter-spacing: 0.1em;
        margin-top: 5px;
        @include tab {
          font-size: 14px;
        }
        @include sp {
          letter-spacing: 0;
        }
      }
      .contents-list-image {
        height: 300px;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        @include pc {
          height: 240px;
        }
        @include tab {
          height: 180px;
        }
        @include sp {
          height: 140px;
        }
        @include xs {
          height: 120px;
        }
      }
    }
  }
}
</style>
