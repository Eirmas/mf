import { Hourglass } from '@/assets/icons'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// eslint-disable-next-line
const opts: Record<string, any> = {
    icons: {
        values: {
            search: {
                component: Hourglass
            }
        }
    }
}
export default new Vuetify(opts)
