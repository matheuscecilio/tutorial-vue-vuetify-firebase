<template>
  <v-app>

    <v-card height="100%">
      <v-navigation-drawer v-model="sidebar" absolute temporary>
        <v-list nav dense>
            <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="isAuthenticated" @click="userSignOut">
              <v-list-item-icon>
                <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sign Out</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon class="hidden-sm-and-up" @click="onNavBarClick()"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            {{ appTitle }}
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-btn v-if="isAuthenticated" text @click="userSignOut">
            <v-icon left dark>mdi-exit-to-app</v-icon>
            Sign Out
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    </v-card>    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      sidebar: false
    }
  },

  methods: {
    onNavBarClick: function() {
      this.sidebar = !this.sidebar;
    },
    userSignOut () {
      this.$store.dispatch('userSignOut');
    }
  },

  computed: {
    appTitle() {
      return this.$store.state.appTitle;
    },
    isAuthenticated () {
      return this.$store.getters.isAuthenticated;
    },
    menuItems() {
      if (this.isAuthenticated) {
        return [
          { title: 'Home', path: '/home', icon: 'mdi-home' }
        ]
      } else {
        return [
          { title: 'Sign Up', path: '/signup', icon: 'mdi-face' },
          { title: 'Sign In', path: '/signin', icon: 'mdi-lock-open' }
        ]
      }     
    }
  }
};
</script>

<style>
.center {
  text-align: center;
}
</style>