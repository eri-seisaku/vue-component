<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div v-if="!confirmMode">
          <SignUpForm :data="sharedData" @toggle-confirm-mode="toggleConfirmMode" />
        </div>
        <div v-else>
          <Confirm :data="sharedData" @go-back="back" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// 確認画面とフォームと分割したかったけど出来なかった
import { ref } from 'vue';
import SignUpForm from '@/views/site/signup/SignUpForm.vue';
import Confirm from '@/views/site/signup/Confirm.vue';

const sharedData = ref({});
const confirmMode = ref(false);

const toggleConfirmMode = () => {
  confirmMode.value = !confirmMode.value;
};

const back = () => {
  confirmMode.value = false;
};
</script>
