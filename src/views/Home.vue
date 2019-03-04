<template>
  <div id="home">
    <Breadcrumb/>
    <div class="posts">
      <div v-for="item in 6" :key="item">
        <Post/>
      </div>
      <Pagination/>
      <PostsCarousel/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Breadcrumb from '@/components/Breadcrumb.vue'
import PostsCarousel from '@/components/modules/PostsCarousel.vue'
import Post from '@/components/modules/Post.vue'
import Pagination from '@/components/Pagination.vue'


export default {
  name: 'home',
  components: {
    Breadcrumb, PostsCarousel, Post, Pagination
  }
}
</script>
