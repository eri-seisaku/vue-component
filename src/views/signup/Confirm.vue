<template>
  <form @submit.prevent="submit">
  <p>{{ data.name }}</p>
  <v-btn @click="back" variant="outlined">
    戻る
  </v-btn>
  <v-btn @click="submit" variant="outlined">
    送信
  </v-btn>
</form>
</template>

<script setup>
const props = defineProps({
  data: Object, // データはオブジェクトとして受け取る
});

const emit = defineEmits(['go-back']); // 親コンポーネントに戻ると送信のイベントを通知

const back = () => {
  // 戻るボタンがクリックされたら親コンポーネントに戻るイベントを通知
  emit('go-back');
};

const submit = () => {
  console.log(props.data.name);
};
</script>
