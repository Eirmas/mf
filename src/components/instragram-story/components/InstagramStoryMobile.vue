<template>
    <div class="stories__item">
        <v-dialog
            v-model="dialog"
            eager
            transition="fade-transition"
            @click:outside="onClickOutside"
            @keydown="onKeyDown">
            <template v-slot:activator="{ on }">
                <div
                    v-on="on"
                    class="stories__image"
                    @click="onStoryClick">
                    <img :src="story.thumbnail" />
                    <button
                        v-if="progress === 1"
                        class="stories__play"
                        role="button" aria-label="Spill av video">
                        <img :src="require('@/assets/icons/replay.svg')">
                    </button>
                </div>
                <div class="stories__title">{{ story.title }}</div>
            </template>
            <div class="stories__video">
                <div class="stories__video-header">
                    <div class="stories__progress">
                        <div class="stories__progress-bar" :style="`width: ${this.progress * 100}%`"></div>
                    </div>
                    <div class="stories__user pa-2">
                        <v-avatar size="35">
                            <img :src="story.thumbnail">
                        </v-avatar>
                        <p class="caption pt-2 pl-2 text--white stories__user-title">{{ story.title }}</p>
                        <v-spacer />
                        <v-btn
                            style="z-index: 1000"
                            elevation="0"
                            fab color="transparent"
                            small>
                            <v-icon color="white" @click="onClickOutside">mdi-close</v-icon>
                        </v-btn>
                    </div>
                </div>
                <video ref="video" class="stories__video-frame" playsinline>
                    <source :src="story.video" type="video/mp4" />
                </video>
            </div>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Story } from '../types'
import { Prop } from 'vue-property-decorator'
import EventBus from '@/eventbus'

@Component({
    name: 'InstagramStoryMobile'
})
export default class InstagramStoryMobile extends Vue {
    @Prop() private story!: Story
    dialog = false
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
            this.interval = setInterval(() => {
                this.progress = this.$refs.video.currentTime / this.$refs.video.duration
            }, 10)
        })
        this.$refs.video.addEventListener('pause', () => {
            this.stopVideo()
        })
    }

    onStoryClick () {
        EventBus.$emit('storyResetProgress')
        this.$refs.video.currentTime = 0
        this.$refs.video.play()
    }

    onClickOutside () {
        this.stopVideo()
        this.progress = 1
    }

    stopVideo () {
        this.dialog = false
        clearInterval(this.interval)
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
    }

    onKeyDown (e: KeyboardEvent) {
        if (e.key === 'Escape') {
            this.stopVideo()
            this.progress = 1
        }
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
    margin: 0 .5rem;
    width: 90px;
    height: auto;
}
.stories__title {
    margin-top: .6rem;
    font-size: .875rem;
    line-height: 1.4;
    overflow-wrap: break-word;
    word-break: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    font-weight: 500;
}
.stories__image {
    cursor: pointer;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid #191b21;
    overflow: hidden;
    padding: 2px;
    img {
        width: 82px;
        height: 82px;
        border-radius: 100%;
    }
}
.stories__video-frame, .stories__video {
    width: 100%;
    border-radius: 4px;
}
.stories__video {
    position: relative;
}
.stories__video-frame {
    max-height: calc(100vh - 150px)
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
    background: rgba(25,27,33,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    width: 82px;
    height: 82px;
    z-index: 1;
    border-radius: 100%;
    transition: none;
    img {
        display: block;
        width: 26px;
        transition: transform .5s ease-in-out;
        transform-origin: 55% 50%;
    }
    &:hover img {
        transform: rotate(-360deg);
    }
}
</style>
<style lang="scss">
.v-dialog {
    box-shadow: none !important;
    border-radius: 0;
    max-width: calc((100vh - 150px) * (9 / 16));
}
.v-dialog__content {
    width: 100vw !important;
}
</style>
