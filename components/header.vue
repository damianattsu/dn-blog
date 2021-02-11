<template>
  <div>
    <header>
      <h1>dn</h1>
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
  color: #fff;
  padding: 20px 15px;
  background-color: #333333;
  h1 {
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0.2em;
  }
}
</style>
