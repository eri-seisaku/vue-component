<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        color="grey-lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar>

        <div>john@google.com</div>
      </v-sheet>

      <!-- こんな風に線をカスタマイズできる -->
      <!-- <v-divider class="border-opacity-50" color="white"></v-divider> -->
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, link] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="link"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'


  const links = [
    ['mdi-upload', 'Upload', '/'],
    ['mdi-upload', 'Upload2', '/upload'],
    ['mdi-delete', 'Button', '/button'],
    ['mdi-alert-octagon', 'Form', '/form'],
    ['mdi-alert-octagon', 'Table', '/table'],
  ]

  const drawer = ref(null)
</script>

