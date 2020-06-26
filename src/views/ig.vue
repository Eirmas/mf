<template>
    <v-app>
        <custom-navbar />
        <instagram-story />
        <custom-footer />
    </v-app>
</template>

<script lang="ts">
    import Component from 'vue-class-component'
    import Vue from 'vue'
    import '@/assets/css/forsvaret.scss'
    import CustomNavbar from '@/components/templates/CustomNavbar.vue'
    import CustomFooter from '@/components/templates/CustomFooter.vue'
    import InstagramStory from '@/components/instragram-story/InstagramStory.vue'

    @Component({
        name: 'IG',
        components: {
            CustomFooter,
            CustomNavbar,
            InstagramStory
        }
    })
    export default class IG extends Vue {
    }
</script>

<style scoped>
</style>
