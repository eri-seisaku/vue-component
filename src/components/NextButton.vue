<template>
  <div>
    <button @click="moveNextScreen">next</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Vue Router
import { useRouter } from 'vue-router';
const router = useRouter(); // ルーターインスタンスを取得
const moveNextScreen = () => {
  router.push('/check');
}

</script>

