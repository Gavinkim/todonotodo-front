<template>
  <v-app>
    <!-- 내비게이션 툴바 영역 -->
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">TODONOTODO</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title"  router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <main>
        <router-view></router-view>
      </main>
    <!-- 햄버거 메뉴 영역 -->
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- fixme: footer 정의를 다시 할것 -->
    <v-footer class="primary dark">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Todonotodo Footer
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        sideNav: false,
        menuItems: [
            {icon: 'store',title: 'Ideas',link: '/ideas'},
            {icon: 'create',title: 'Add',link: '/idea/new'},
            {icon: 'person',title: 'Profile',link: '/profile'},
            {icon: 'lock_open',title: 'Sign in',link: '/signin'}
        ]
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main.styl'
</style>