<template>
    <aside id="right-column">
        <About/>
        <Facebook/>
        <PostsCarousel/>
        <Tags/>
        <Social/>
    </aside>
</template>

<script>
import About from '@/components/modules/About.vue'
import Facebook from '@/components/modules/Facebook.vue'
import PostsCarousel from '@/components/modules/PostsCarousel.vue'
import Tags from '@/components/modules/Tags.vue'
import Social from '@/components/modules/Social.vue'

export default {
    components: {
        About, Facebook, PostsCarousel, Tags, Social
    }
}
</script>

<style>
#right-column {
    background-color: #ccc;
}
</style>
