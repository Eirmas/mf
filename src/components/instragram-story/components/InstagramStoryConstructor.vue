<template>
    <div class="custom-ig__main">
        <h2>{{ title }}</h2>
        <div
            v-if="width > 991"
            class="stories__list"
        >
            <instagram-story-desktop
                v-for="(story, index) in stories"
                :key="index"
                :story="story"
            />
        </div>
        <div
            v-else
            class="stories__list"
        >
            <instagram-story-mobile
                v-for="(story, index) in stories"
                :key="index"
                :story="story"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Story } from '@/components/instragram-story/types'
import InstagramStoryDesktop from '@/components/instragram-story/components/InstagramStoryDesktop.vue'
import InstagramStoryMobile from "@/components/instragram-story/components/InstagramStoryMobile.vue";

@Component({
    name: 'InstagramStoryConstructor',
    components: {
        InstagramStoryMobile,
        InstagramStoryDesktop
    }
})
export default class InstagramStoryConstructor extends Vue {
    @Prop() private title!: string
    @Prop() private stories!: Story[]
    width = window.innerWidth
    created () {
        window.addEventListener('resize', () => this.width = window.innerWidth)
    }
}
</script>

<style scoped lang="scss">
.custom-ig__main {
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 8rem;
    position: relative;
    background: linear-gradient(180deg, transparent 50%, #f5f7f8 50%);
    margin-bottom: 2em;
    h2 {
        font-size: 2rem;
        margin-bottom: 6rem;
        font-weight: 500;
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }
    .stories__list {
        display: flex;
        justify-content: center;
        margin: 0 -3rem;
    }
}
</style>
