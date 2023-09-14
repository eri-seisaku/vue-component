<template>
  <!-- 最初に作った管理画面デザイン -->
  <v-app color="background">

    <v-system-bar color="user">

      <v-btn
        variant="text"
        href="/"
      >
        <v-icon icon="mdi-home"></v-icon>
        <span>会員サイト</span>
      </v-btn>

      <v-btn variant="text">
        <v-icon icon="mdi-comment"></v-icon>
        <span>0</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn variant="text">
        <v-icon icon="mdi-account"></v-icon>
        <span>{{ greeting }}</span>

        <v-menu activator="parent">
          <v-list bg-color="user">
            <v-list-item
              v-for="userMenu in userMenus"
              :key="userMenu.title"
              :title="userMenu.title"
              :to="userMenu.to"
              :exact="true"
              @click="handleUserMenuItemClick(userMenu)"
            ></v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      color="user"
      @click="rail = false"
    >
    <v-list-item
      prepend-avatar="../../assets/icon/user_icon.png"
      :title="user.email"
      nav
    >
    <!-- <v-list-item
      prepend-avatar="../../assets/icon/user_icon.png"
      :title="authStore.userProfile.email"
      nav
    > -->
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider class="border-opacity-50" color="white"></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(menu, index) in navMenus"
        :key="menu.title"
        :prepend-icon="menu.icon"
        :title="menu.title"
        :to="menu.to"
        :exact="true"
        @click="handleMenuItemClick(menu, index)"
      ></v-list-item>

    </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="background">
      <v-col cols="12">
        <span>© 2023</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
const drawer = ref(true);
const rail = ref(true);

// firebase
import { auth } from '../../firebase/firebase';
import { logout } from '../../firebase/auth';
const user = auth.currentUser;

const navMenus = [
  {
    icon: 'mdi-view-dashboard',
    title: 'ダッシュボード',
    to: "/admin"
  },
  {
    icon: 'mdi-account-cog',
    title: 'プロフィール',
    // to: `/admin/profile/${authStore.userProfile.id}`
    to: `/admin/profile/${user.uid}`
  },
  {
    icon: 'mdi-file-account',
    title: 'ポートフォリオ申請',
    to: '/admin/portfolio'
  },
];

const userMenus = [
  {
    title: 'プロフィール編集',
    // to: `/admin/profile/${authStore.userProfile.id}`
    to: `/admin/profile/${user.uid}`
  },
  {
    title: 'ログアウト',
    to: '/'
  },
];

// ログインユーザーの挨拶
const greeting = computed(() => {
  // return `こんにちは、${authStore.userProfile.email} さん`;
  return `こんにちは、${user.email} さん`;
});

// router
import { useRouter } from 'vue-router';
const router = useRouter();

const handleUserMenuItemClick = async (menu) => {
  if (menu.title === 'プロフィール編集') {
    // プロフィール編集ページへ遷移
    router.push(menu.to);
  } else if (menu.title === 'ログアウト') {
    // ログアウト処理を実行
    try {
      await logout();
      // ログアウト成功後の処理を追加
      router.push('/');
    } catch (error) {
      // エラーハンドリングを行う
      console.error('ログアウトエラー', error);
    }
  }
};
</script>

