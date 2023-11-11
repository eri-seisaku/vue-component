<template>
  <v-col cols="12" md="12">
    <v-sheet
      min-height="30vh"
      class="bg-grey-lighten-3 d-flex justify-center align-center flex-column"
    >
      <h2 class="text-h4 text-decoration-underline my-4">
        Detail
      </h2>
      <p class="text-center">dddddddddd</p>
    </v-sheet>
  </v-col>
  <v-col cols="12" md="10">
    <v-sheet
      min-height="70vh"
      rounded="lg"
      class="pa-8"
    >
      <v-row class="justify-center">
        <v-col cols="12" md="3" align="center">
          <v-avatar
            color="grey"
            size="120"
            class="mx-4"
          >
            <v-img
              cover
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9">
          <h1 class="text-h5 my-5">名前太郎</h1>
          <p>ssssssssss</p>
        </v-col>
      </v-row>
      <v-row>
        <DialogCard />
      </v-row>
    </v-sheet>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';

// components
import DialogCard  from '@/views/site/child_detail/DialogCard.vue';
import Avatar from '@/components/Avatar.vue';


</script>

<style>

</style>
