<template>
  <div id="home">
    <Breadcrumb/>
    <div class="posts">
      <div v-for="item in 6" :key="item">
        <Post/>
      </div>
      <Pagination/>
      <RightColumn/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumb from '@/components/Breadcrumb.vue'
import RightColumn from '@/components/RightColumn.vue'
import Post from '@/components/modules/Post.vue'
import Pagination from '@/components/Pagination.vue'


export default {
  name: 'home',
  components: {
    Breadcrumb, RightColumn, Post, Pagination
  }
}
</script>