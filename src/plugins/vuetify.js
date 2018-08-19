import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VTooltip,
  VTextField,
  VDivider,
  VJumbotron,
  VParallax,
  VTextarea,
    VForm,
    VBadge,
    VAvatar,
    VSubheader,
    VPagination,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VTooltip,
    VTextField,
    VDivider,
    VJumbotron,
    VParallax,
    VTextarea,
      VForm,
      VBadge,
      VAvatar,
      VSubheader,
      VPagination,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
})
