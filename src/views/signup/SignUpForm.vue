<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="data.name"
      label="name"
      variant="outlined"
    ></v-text-field>

    <v-btn
      class="me-4"
      @click="confirm"
      variant="outlined"
    >
      確認
    </v-btn>
  </form>
</template>

<script setup>
import { ref} from 'vue';

const props = defineProps({
  data: Object, // データはオブジェクトとして受け取る
});

const data = ref({
  name: props.data.name,
});

const emit = defineEmits(['toggle-confirm-mode']);

const confirm = () => {
  // フォームのデータを親コンポーネントに送信
  props.data.name = data.value.name;

  // confirmModeを切り替えるためのイベントを親コンポーネントに通知
  emit('toggle-confirm-mode');
};


</script>
