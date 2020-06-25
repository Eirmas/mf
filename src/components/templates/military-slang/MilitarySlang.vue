<template>
    <div class="custom-mf__main">
        <div style="background: #EDE9E8" class="px-3">
            <h1 class="h2 mb-5 text-center">Militære forkortelser</h1>
            <p class="p text-center mb-5">
                Søk på en forkortelse
                <br>
                eller en beskrivelse.
            </p>
            <v-text-field
                v-model="searchString"
                placeholder="For eksempel HV, KV eller patruljefører"
                rounded
                class="custom-mf__search"
                append-icon="$vuetify.icons.search" />
            <p class="text-center pb-7 pt-10 mb-0">Antall forkortelser: {{ numberEntriesInSearch }}</p>
        </div>
        <v-container
            class="mb-12">
            <v-simple-table class="custom-mf__table">
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">Forkortelse</th>
                        <th class="text-left">Beskrivelse</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(slang, index) in updateSlangWords"
                        :key="index">
                        <td>{{ slang.word }}</td>
                        <td>{{ slang.description }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <span v-show="(numberEntriesInSearch > this.maxEntries)">
                <div role="status" class="search__label text-center pt-10">
                    Viser {{ updateSlangWords.length }} av {{ numberEntriesInSearch }}
                </div>
                <div class="progress-bar">
                    <div class="progress-bar__inner" ref="progressBar" />
                </div>
                <button
                    type="button"
                    class="btn-square border-draw search__more"
                    @click="maxEntries = maxEntries + entriesStep">
                    <span>Vis flere</span>
                </button>
            </span>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import * as v from '@/components/templates/military-slang/data/index'
import { Slang } from '@/components/templates/military-slang/data'

interface Filter {
    prioritised: number;
    secondary: number;
    slang: Slang;
}

@Component({
    name: 'MilitarySlang'
})
export default class MilitarySlang extends Vue {
    searchString = ''
    slangWords: Slang[] = v.data
    maxEntries = 30
    entriesStep = 30

    $refs!: {
        progressBar: HTMLDivElement;
    }

    mounted () {
        this.$refs.progressBar.style.width = `${(this.updateSlangWords.length / this.numberEntriesInSearch) * 100}%`
    }

    get updateSlangWords (): Slang[] {
        const slangs: Slang[] = (!this.searchString) ?
            this.slangWords.sort((a: Slang, b: Slang) => a.word > b.word ? 1 : -1).slice(0, this.maxEntries) :
            this.filterWords(this.searchString).slice(0, this.maxEntries)
        if (this.$refs.progressBar) {
            this.$refs.progressBar.style.width = `${(slangs.length / this.numberEntriesInSearch) * 100}%`
        }
        return slangs
    }

    get numberEntriesInSearch (): number {
        if (!this.searchString) {
            return this.slangWords.length
        } else {
            return this.filterWords(this.searchString).length
        }
    }

    filterWords = (searchString: string): Slang[] => {
        const result: Filter[] = this.slangWords.map((v: Slang) => ({
            prioritised: v.word.search(searchString),
            secondary: v.description.search(searchString),
            slang: v
        }))
        const prioritisedSorted = result.filter((v: Filter) => v.prioritised !== -1).sort((a: Filter, b: Filter) => a.prioritised > b.prioritised ? 1 : -1)
        const secondarySorted = result.filter((v: Filter) => v.secondary !== -1).sort((a: Filter, b: Filter) => a.secondary > b.secondary ? 1 : -1)
        return [ ...prioritisedSorted, ...secondarySorted.filter((v: Filter) => !prioritisedSorted.includes(v)) ].map((v: Filter) => v.slang)
    }
}
</script>

<style lang="scss">
.custom-mf__main {
    padding-top: 178px;
}
.custom-mf__search {
    max-width: 500px !important;
    margin: 0 auto;
    background: white;
    .v-input__control .v-text-field__details {
        display: none;
    }
}
.custom-mf__table {
    max-width: 600px !important;
    margin: 0 auto;
    th {
        border: none !important;
        color: #191b21 !important;
    }
}
</style>
