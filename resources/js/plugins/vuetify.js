import Vue from 'vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VMain,
    VContainer,
    VNavigationDrawer,
    VIcon,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VListItemIcon,
    VToolbarTitle,
    VToolbarItems,
    VDivider,
    VBtn,
    VSwitch,
    VSpacer,
    VSheet,
    VRow,
    VCol,
    VProgressCircular,
    VCard,
    VCardText,
    VCardActions,
    VTextField
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VApp,
        VAppBar,
        VAppBarNavIcon,
        VMain,
        VContainer,
        VNavigationDrawer,
        VIcon,
        VList,
        VListItem,
        VListItemAvatar,
        VListItemContent,
        VListItemTitle,
        VListItemSubtitle,
        VListItemIcon,
        VToolbarTitle,
        VToolbarItems,
        VDivider,
        VBtn,
        VSwitch,
        VSpacer,
        VSheet,
        VRow,
        VCol,
        VProgressCircular,
        VCard,
        VCardText,
        VCardActions,
        VTextField
    },
})

const opts = {
    theme: { dark: true }
}

export default new Vuetify(opts)
