<template>
  <section class="contents">
    <div class="wrapper">
      <div class="contents-list-wrapper cf">
        <div v-for="content in contents" :key="content.id" class="contents-list match-height">
          <nuxt-link :to="`/${content.id}`">
            <div :style="{ backgroundImage: `url(${ content.main_image.url })` }" class="contents-list-image">
            </div>
            <h2>
              {{ content.title }}
            </h2>
          </nuxt-link>
        </div>
      </div>
      <div class="pager">
        <ul class="cf">
          <li>
            <nuxt-link :to="'/'" exact-active-class="current">
              1
            </nuxt-link>
          </li>
          <li v-for="page in ((pageCount)-1)" :key="page.id">
            <nuxt-link :to="'/page/' + ((page)+1)" :class="'page0' + ((page)+1)" exact-active-class="current">
              {{ ((page)+1) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, $config }) {
    const page = params.p || '1'
    const limit = 6
    const { data } = await axios.get(
      `https://dn-blog.microcms.io/api/v1/blog?limit=${limit}&offset=${(page - 1) * limit}`,
      {
        headers: { 'X-API-KEY': $config.apiKey }
      }
    )
    return data
  },
  mounted() {
    this.$nextTick(function() {
      const matchHeight = document.getElementsByClassName('match-height')
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
  computed: {
    pageCount: function () {
      return Math.ceil( this.totalCount / this.limit);
    }
  }
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
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0.5px;
        margin-top: 5px;
        margin-bottom: 0;
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
        filter: grayscale(0);
        transition: ease .4s;
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
      &:hover {
        .contents-list-image {
          filter: grayscale(80%);
          transition: ease .4s;
        }
      }
    }
  }
}
.pager {
  margin-top: 20px;
  text-align: center;
  ul {
    display: inline-block;
    margin: 0 -5px;
    li {
      float: left;
      padding: 0 5px;
      a {
        font-weight: bold;
        text-align: center;
        display: inline-block;
        padding: 5px 10px;
        background-color: #e7e7e7;
        transition: ease .4s;
        &:hover {
          color: #fff;
          background-color: #333;
          transition: ease .4s;
        }
        &.current {
          color: #fff;
          background-color: #333;
        }
      }
    }
  }
}
</style>
