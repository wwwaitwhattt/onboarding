<template>
  <v-app>
    <v-navigation-drawer
        app
        temporary
        v-model="drawer"
    >
      <v-list>
        <v-list-item
            v-for="link in links"
            :key="link.title"
            :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Ad application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            text
            v-for="link in links"
            :key="link.title"
            :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title:'Login', icon:'mdi-login', url: '/login'},
        {title:'Registration', icon:'mdi-account-plus', url: '/registration'},
        {title:'Orders', icon:'mdi-bookmark-outline', url: '/orders'},
        {title:'New ad', icon:'mdi-note-plus', url: '/new'},
        {title:'My ads', icon:'mdi-format-list-bulleted', url: '/list'}
      ]
    }
  }
};
</script>
