<template>
    <v-app>
        <custom-navbar />
        <div class="container__main">
            <h1 class="h1 text-center pt-16">Demonstasjon</h1>
            <div class="container__main-part">
                <div class="promoted-banner__media">
                    <div class="promoted-banner__body py-16">
                        <div class="promoted-banner__label label">Se koden</div>
                        <div class="promoted-banner__header">
                            Koden ligger på GitHub
                        </div>
                        <div class="promoted-banner__label label promoted-banner__cite">PS: Mangler Cera Pro font og navbar funksjonalitet</div>
                        <div class="promoted-banner__button-wrapper">
                            <a class="promoted-banner__link button" href="https://github.com/Eirmas/mf">
                                <span>Github</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container__main-part blue-light">
                <div class="promoted-banner__media">
                    <div class="promoted-banner__body py-16">
                        <div class="promoted-banner__label label">Militære Forkortelser</div>
                        <div class="promoted-banner__header">En demonstrasjon av en løsning på ønsket om å inkludere en liste for de militære forkortelsene vi har i forsvaret
                        </div>
                        <div class="promoted-banner__button-wrapper">
                            <router-link :to="'mf'" @click.native="scrollToTop">
                                <a class="promoted-banner__link button">
                                    <span>Se demo</span>
                                </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container__main-part">
                <div class="promoted-banner__media">
                    <div class="promoted-banner__body py-16">
                        <div class="promoted-banner__label label">Instagram Story</div>
                        <div class="promoted-banner__header">Dette er mitt forsøk på å lage en modul for instagram historier. Den skal fungere på både mobil og desktop
                        </div>
                        <div class="promoted-banner__button-wrapper">
                            <router-link :to="'ig'" @click.native="scrollToTop">
                                <a class="promoted-banner__link button">
                                    <span>Se demo</span>
                                </a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <custom-footer />
    </v-app>
</template>

<script lang="ts">
    import Component from 'vue-class-component'
    import Vue from 'vue'
    import '@/assets/css/forsvaret.scss'
    import CustomNavbar from '@/components/templates/CustomNavbar.vue'
    import CustomFooter from '@/components/templates/CustomFooter.vue'

    @Component({
        name: 'Index',
        components: {
            CustomFooter,
            CustomNavbar
        }
    })
    export default class Index extends Vue {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
</script>

<style scoped>
.container__main {
    padding-top: 178px;
}
.container__main-part {
    margin: 3.75rem 0;
}
@media (max-width: 991px) {
    .container__main {
        padding-top: 112px;
    }
}
</style>
