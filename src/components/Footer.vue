<template>
    <div id="footer">
        <Newsletter/>
        <Instagram/>
        <div id="copyright">Made by Mirjan24</div>
    </div>
</template>

<script>
import Newsletter from '@/components/modules/Newsletter.vue';
import Instagram from '@/components/modules/Instagram.vue';

export default {
    components: {
        Newsletter, Instagram
    }
}
</script>

<style scoped>
    #footer {
        padding-top: 20px;
        border-top: 1px solid #ccc;
    }
</style>