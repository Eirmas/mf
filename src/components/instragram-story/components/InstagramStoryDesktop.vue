<template>
    <div class="stories__item">
        <div class="stories__video">
            <div
                v-show="isPlaying"
                class="stories__video-header">
                <div class="stories__progress">
                    <div class="stories__progress-bar" :style="`width: ${this.progress * 100}%`"></div>
                </div>
                <div class="stories__user pa-2">
                    <v-avatar size="35">
                        <img :src="story.thumbnail">
                    </v-avatar>
                    <p class="caption stories__user-title pt-2 pl-2 text--white">{{ story.title }}</p>
                    <v-spacer />
                    <v-btn
                        style="z-index: 1000"
                        elevation="0"
                        fab color="transparent"
                        small>
                        <v-icon color="white" @click="stopVideo">mdi-close</v-icon>
                    </v-btn>
                </div>
            </div>
            <video
                ref="video"
                :src="story.video"
                type="video/mp4"
                playsinline
                class="stories__video-frame"
            />
            <div v-show="!isPlaying && progress === 1" class="stories__overlay" />
            <button
                v-show="!isPlaying"
                :class="[progress === 1 ? 'stories__replay' : 'stories__play']"
                @click="onButtonClickHandler">
                <img v-show="progress === 1" :src="require('@/assets/icons/replay.svg')">
            </button>
        </div>
        <div class="stories__title">{{ story.title }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Story } from '../types'
import { Prop } from 'vue-property-decorator'
import EventBus from '@/eventbus'

@Component({
    name: 'InstagramStoryDesktop'
})
export default class InstagramStoryDesktop extends Vue {
    @Prop() private story!: Story
    isPlaying = false
    progress = 0
    interval: number | undefined

    $refs!: {
        video: HTMLVideoElement;
    }

    mounted () {
        EventBus.$on('storyResetProgress', () => {
            this.progress = 0
        })
        this.$refs.video.addEventListener('play', () => {
            this.isPlaying = true
            this.interval = setInterval(() => {
                this.progress = this.$refs.video.currentTime / this.$refs.video.duration
            }, 10)
        })
        this.$refs.video.addEventListener('pause', () => {
            this.isPlaying = false
            this.stopVideo()
        })
    }

    stopVideo () {
        this.$refs.video.pause()
        clearInterval(this.interval)
        this.$refs.video.currentTime = 0
        this.progress = 1
    }

    onButtonClickHandler () {
        this.$refs.video.currentTime = 0
        this.$refs.video.play()
        EventBus.$emit('storyResetProgress')
    }
}
</script>

<style scoped lang="scss">
.stories__user-title {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.stories__item {
    max-width: 351px;
    max-height: 624px;
    margin: 0 3rem;
    .stories__title {
        max-width: 249px;
        overflow-wrap: break-word;
        word-break: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        margin-top: 1.5rem;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.4;
    }
}
.stories__video-frame, .stories__video {
    height: 442px;
}
.stories__video {
    position: relative;
}
.stories__play {
    outline: none;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #191b2180;
    opacity: 1;
}
.stories__replay {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    border: none;
    padding: 0;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background: #191b2180;
    img {
        width: 30px;
        left: 15px;
        top: 19px;
        position: absolute;
    }
}
.stories__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #191b2180;
}
.stories__play:after {
    content: "";
    position: absolute;
    top: 22px;
    left: 25px;
    width: 0;
    height: 0;
    border-color: transparent transparent transparent #fff;
    border-style: solid;
    border-width: 10.5px 0 10.5px 16px;
}
.stories__video-header {
    position: absolute;
    width: 100%;
    p {
        color: white;
    }
}
.stories__user {
    display: flex;
}
.stories__progress {
    margin: 8px 12px 0 8px;
    width: calc(100% - 16px);
    height: 3px;
    background: rgba(255, 255, 255, 0.5);
    .stories__progress-bar {
        background: rgba(255, 255, 255, 1);
        width: 100%;
        height: 100%;
    }
}
.stories__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 4rem;
    height: 4rem;
}
</style>
