<template>
  <div>
    <v-btn
      color="primary"
      @click="dialog = true"
    >
      パスワード変更
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="448"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">パスワード変更</span>
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="submit">
            <div class="text-subtitle-1 text-medium-emphasis">現在のパスワード</div>
            <v-text-field
              required
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              v-model="currentPassword"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis">新しいパスワード</div>
            <v-text-field
              required
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              v-model="newPassword"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis">新しいパスワード（確認用）</div>
            <v-text-field
              required
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="visible = !visible"
              v-model="confirmPassword"
            ></v-text-field>
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
            <v-card
              class="mb-12"
              color="surface-variant"
              variant="tonal"
              v-if="message"
            >
              <v-card-text class="text-medium-emphasis text-caption">
                {{ message }}
              </v-card-text>
            </v-card>

            <v-btn
              block
              class="mb-8"
              color="blue"
              size="large"
              variant="tonal"
              type="submit"
            >
              パスワードを変更
            </v-btn>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" variant="text" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { updatePasswordByAuth } from '../firebase/auth';

const dialog = ref(false);
const visible = ref(false);
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const message = ref('');

const submit = async () => {
  try {
    // 新しいパスワードが確認用と一致するか確認
    if (newPassword.value !== confirmPassword.value) {
      errorMessage.value = '新しいパスワードが一致しません。';
      return;
    }
    await updatePasswordByAuth(currentPassword.value, newPassword.value);

    errorMessage.value = '';
    message.value = 'パスワードの更新に成功しました。';

  } catch (error) {
    console.error(error);
    errorMessage.value = 'パスワードの変更に失敗しました。';
  }
};

</script>
