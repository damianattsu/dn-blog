<template>
  <div>
    <header class="cf">
      <h1 class="logo">dn64</h1>
      <HeaderNav />
    </header>
  </div>
</template>

<script>
import HeaderNav from "@/components/headerNav.vue";
export default {
  components: {
    HeaderNav
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 15px 15px;
  background-color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: table;
  .logo {
    color: #fff;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 2px;
    float: left;
  }
}
</style>
