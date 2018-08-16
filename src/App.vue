<template>
  <v-app>
    <!-- 내비게이션 툴바 영역 -->
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>TDNTD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
        <v-btn flat>
          <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <main>
          <router-view></router-view>
      </main>
    <!-- 햄버거 메뉴 영역 -->
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        sideNav: false,
        menuItems: [
            {icon: 'store',title: 'Ideas'},
            // {icon: 'whatshot',title: 'Hot'},
            {icon: 'person',title: 'Profile'},
            {icon: 'face',title: 'Sign up'},
            {icon: 'lock_open',title: 'Sign in'}
        ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main.styl'
</style>