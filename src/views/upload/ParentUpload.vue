<template>
  <v-container>
    <!-- タイトル -->
    <Title
      color="primary"
      iconName="mdi-upload"
    >
    <template v-slot:title>
      UPLOAD
    </template>
    </Title>
    <!-- 本文 -->
    <p class="ma-12">ボタンを押すとアップロードエリアが表示される</p>

    <!-- アップロードボタン -->
    <v-btn
      class="ma-2"
      @click="uploadDialog = true"
    >
      <v-icon start icon="mdi-upload"></v-icon>
      Upload
    </v-btn>

    <!-- アップロードコンポーネント -->
    <Upload
      v-model:errorMessage="errorMessage"
      v-model:dialog="uploadDialog"
      @update:filesUploaded="handleFilesUploaded"
    />
  </v-container>
</template>

<script setup>
import Upload from '@/components/upload/ChildToConsole.vue';
import Title from '@/components/Title.vue';
// import Upload from '../../components/upload/ChildToStorage.vue';
import { ref } from 'vue'

// 初期化
const uploadDialog = ref(false);
const errorMessage = ref('');

// ファイルがアップロードされた時のハンドラ
const handleFilesUploaded = (files) => {
  console.log('Received uploaded files:', files);
};


// デバック
// import { watch } from 'vue';
// watch(uploadDialog, (newVal) => {
//   console.log('uploadDialogの値が変更されました:', newVal);
// });

// watch(errorMessage, (newVal) => {
//   console.log('errorMessageの値が変更されました:', newVal);
// });

</script>
