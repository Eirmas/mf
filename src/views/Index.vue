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
import MilitarySlang from '@/components/templates/military-slang/MilitarySlang.vue'

@Component({
    name: 'Index',
    components: {
        CustomFooter,
        CustomNavbar,
        MilitarySlang
    }
})
export default class Index extends Vue {
}
</script>

<style scoped>
.custom-main {
    padding-top: 178px;
}
</style>
