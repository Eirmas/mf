<template>
    <v-app>
        <custom-navbar />
        <military-slang />
        <custom-footer />
    </v-app>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import '@/assets/css/forsvaret.scss'
import CustomNavbar from '@/components/templates/CustomNavbar.vue'
import CustomFooter from '@/components/templates/CustomFooter.vue'
import MilitarySlang from '@/components/military-slang/MilitarySlang.vue'

@Component({
    name: 'MF',
    components: {
        CustomFooter,
        CustomNavbar,
        MilitarySlang
    }
})
export default class MF extends Vue {
}
</script>

<style scoped>
</style>
