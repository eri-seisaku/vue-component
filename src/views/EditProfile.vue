<template>
  <form @submit.prevent="submit">
    <v-row>
      <v-col cols="12" md="6">
        <Text
          label="名前"
          type="text"
          :disabled="false"
          v-model:inputValue="userData.name"
        />
      </v-col>
      <v-col cols="12" md="6">
        <Text
          label="メールアドレス"
          type="email"
          :disabled="false"
          v-model:inputValue="userData.email"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <Text
          label="電話番号"
          type="text"
          :disabled="true"
          v-model:inputValue="userData.phone"
        />
      </v-col>
      <v-col cols="12" md="6">
        <Text
          label="選択項目"
          type="text"
          :disabled="true"
          v-model:inputValue="userData.select"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-btn
          @click="showInput = !showInput"
          variant="outlined"
        >
        {{ showInput ? 'キャンセル' : 'パスワード更新' }}
      </v-btn>

      <div v-if="showInput">
        <Password
          label="現在のパスワード"
          v-model:inputValue="userData.currentPassword"
        />
        <Password
          label="新しいパスワード"
          v-model:inputValue="userData.newPassword"
        />
        <Password
          label="新しいパスワード（確認）"
          v-model:inputValue="userData.confirmPassword"
        />
      </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="user"
          type="submit"
          class="mb-4"
        >
          <v-icon
            start
            icon="mdi-content-save"
          ></v-icon>
          更新
        </v-btn>
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
          v-if="errorMessage"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            {{ errorMessage }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </form>
</template>

<script setup>
// 本開発でパスワード変更ボタンをクリックしたら下にパスワード変更のフォームが表示される
import { ref, onMounted } from 'vue';
import { auth } from '@/firebase/firebase';
import { getData, updateData } from '@/firebase/firestore';
import { updateEmailByAuth, updatePasswordByAuth } from '@/firebase/auth';

// 各コンポーネントインポート
import Password from '@/components/inputs/Password.vue';
import Text from '@/components/inputs/Text.vue';

// ログイン中のユーザー情報を取得
const user = auth.currentUser;

const userData = ref({
  name: '',
  email: '',
  phone: '',
  select: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const showInput = ref(false);
const errorMessage = ref('');

onMounted(async () => {
  try {
    // Firestoreからユーザーの情報を取得し、userDataにセット
    const userDoc = await getData(user.uid, "members");
    userData.value = userDoc;
  } catch (error) {
    console.error('ユーザーデータ取得エラー', error);
  }
});

const submit = async () => {
  try {
    // デバック
    console.log(userData.value.email);

    // Firestoreにユーザー情報を更新
    await updateData(user.uid, "members", userData.value);

    // メールアドレスの更新
    await updateEmailByAuth(userData.value.email);

    // パスワードの更新
    await updatePasswordByAuth(password.value);

    // 成功メッセージなどの処理を追加
  } catch (error) {
    console.error('ユーザーデータ更新エラー', error);
    errorMessage.value = 'ユーザー情報の更新に失敗しました。';
  }
};
</script>
