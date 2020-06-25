<template>
    <footer>
        <div class="footer__logo">
            <img src="../../assets/icons/logo-bottom.svg" alt="Logo">
        </div>

        <ul class="footer__list footer__links">
            <li class="footer__item">
                <a class="footer__link underline-draw"
                   href="#">
                    Kontakt
                </a>
            </li>
            <li class="footer__item">
                <a class="footer__link underline-draw" href="http://uu.difi.no" rel="noreferrer noopener"
                   target="_blank">
                    Tilgjengelighet
                </a>
            </li>
            <li class="footer__item">
                <a class="footer__link underline-draw" href="http://uu.difi.no" rel="noreferrer noopener"
                   target="_blank">
                    Personvern
                </a>
            </li>
        </ul>

        <div class="footer__list">
            <a class="footer__some" href="https://twitter.com/forsvaret_no/" rel="noreferrer noopener" target="_blank"
               title="Twitter">
                <img src="../../assets/icons/twitter.svg" alt="Twitter logo" width="20">
            </a>
            <a class="footer__some" href="https://facebook.com/forsvaret" rel="noreferrer noopener" target="_blank"
               title="Facebook">
                <img src="../../assets/icons/facebook.svg" alt="Facebook logo" width="20">
            </a>
            <a class="footer__some" href="https://instagram.com/forsvaret" rel="noreferrer noopener" target="_blank"
               title="Instagram">
                <img src="../../assets/icons/instagram.svg" alt="Instagram logo" width="19">
            </a>
        </div>

        <div class="footer__copyright">
            Opphavsrett Forsvaret © 2020
        </div>
    </footer>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
@Component({
    name: 'CustomFooter'
})
export default class CustomFooter extends Vue {
}
</script>

<style scoped>

</style>
