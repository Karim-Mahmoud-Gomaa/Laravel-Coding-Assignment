<template>
  <div id="layout-wrapper" style="zoom: 100%;">
    <Header></Header>
    <aside-menu></aside-menu>
    <div class="main-content">
      <slot/>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import AsideMenu from './AsideMenu.vue';
import FooterBar from './FooterBar.vue';

export default {
  components: {AsideMenu,FooterBar,Header},
  data() {
    return {};
  },
};
</script>