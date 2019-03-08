<template>
  <div id="app">

    <app-header></app-header>
    <router-view/>
    <app-right-column></app-right-column>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import RightColumn from './components/RightColumn.vue';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-right-column': RightColumn,
  },
}
</script>

<style lang="scss">
  @import "./assets/scss/app.scss"; 
</style>