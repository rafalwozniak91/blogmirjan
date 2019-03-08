<template>
    <header id="header" class="header">
        <Nav/>
        <h1>LOGO</h1>
        <Menu/>
        <Search/>
        <Slider/>
    </header>
</template>

<script>
import Nav from '@/components/modules/Nav.vue'
import Menu from '@/components/modules/Menu.vue'
import Search from '@/components/modules/Search.vue'
import Slider from '@/components/modules/Slider.vue'

export default {
    components: {
        Menu, Nav, Search, Slider
    }
}
</script>
