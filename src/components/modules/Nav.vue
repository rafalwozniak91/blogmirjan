<template>
    <div id="nav" class="navbar">

	<div class="container">
		<nav class="nav">
		  <router-link to="/">Home</router-link>
	      <router-link to="/about">About</router-link>
	      <router-link to="/category">Category</router-link>
	 	</nav>
	    <Social/>
	</div>

    </div>
</template>

<script>
import Social from '@/components/modules/Social.vue'

export default {
    components: {
        Social
    }
}
</script>
