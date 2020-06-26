<template>
    <div class="custom-mf__main">
        <div style="background: #EDE9E8" class="px-3 pb-12">
            <h1 class="h1 mb-5 text-center">Instagram story</h1>
        </div>
        <instagram-story-constructor :title="title" :stories="stories"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import InstagramStoryConstructor from '@/components/instragram-story/components/InstagramStoryConstructor.vue'
    import { Story } from '@/components/instragram-story/types'

    @Component({
        name: 'InstagramStory',
        components: {
            InstagramStoryConstructor
        }
    })
    export default class InstagramStory extends Vue {
        title = 'Våre soldater'
        stories: Story[] = [
            {
                title: 'Marinejegerkommandoen',
                video: require('@/assets/videos/story1.mp4'),
                thumbnail: require('@/assets/thumbnails/story1.png')
            },
            {
                title: 'Marinejeger og opptak',
                video: require('@/assets/videos/story2.mp4'),
                thumbnail: require('@/assets/thumbnails/story2.png')
            },
            {
                title: 'Marinejegerkommandoen sluses ut av ubåt',
                video: require('@/assets/videos/story3.mp4'),
                thumbnail: require('@/assets/thumbnails/story3.png')
            }
        ]
    }
</script>

<style lang="scss">
    .custom-mf__main {
        padding-top: 178px;
    }
    @media (max-width:991px) {
        .custom-mf__main {
            padding-top: 112px;
        }
    }
</style>
