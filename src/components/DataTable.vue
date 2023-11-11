<template>
  <h2 class="text-h5">
    データテーブル
  </h2>
  <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers01"
    :items="desserts"
    item-value="name"
    class="my-table"
  ></v-data-table>

  <!-- 一部色の変更 -->
  <v-data-table
    :headers="headers02"
    :items="items"
    class="px-6 py-4 rounded"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>LOG</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <!-- {{ item }} -->
      <v-chip :color="getColor(item.columns.action)">
        {{ item.columns.action }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script setup>
const itemsPerPage = 5;
const headers01 = [
  {
    title: '事業所名',
    align: 'start',
    sortable: false, // ソート
    key: 'officeName',
  },
  { title: '代表者名', align: 'end', key: 'name' },
  { title: '地方', align: 'end', key: 'area' },
  { title: '都道府県', align: 'end', key: 'state' },
  { title: '入会年月日', align: 'end', key: 'joinData' },
  { title: '専門デザイン分野', align: 'end', key: 'specialty' },
];

const desserts = [
  {
    officeName: 'デジタル会社',
    name: '苗字 名前',
    area: '関西エリア',
    state: '奈良県',
    joinData: '2023年9月14日',
    specialty: 'Webデザイン',
  },
  {
    officeName: 'イラスト会社',
    name: 'ななし 太郎',
    area: '関西エリア',
    state: '奈良県',
    joinData: '2023年9月15日',
    specialty: 'DTPデザイン',
  },
];

// -----------------------------------
const headers02 = ref([
  {
    title: 'DATE',
    align: 'start',
    sortable: false,
    key: 'date',
  },
  { title: 'ACTION', key: 'action' },
  { title: 'COMMENT', key: 'comment' },
]);
const items = ref([
  {
    date: '2023/10/07',
    action: 'IMPORT',
    comment: 'データをインポートしました。',
  },
  {
    date: '2023/10/06',
    action: 'APPLICATION',
    comment: 'ポートフォリオの申請されました。',
  },
  {
    date: '2023/10/07',
    action: 'EXPORT',
    comment: 'データをエクスポートしました。',
  },
]);

const getColor = (action) => {
  console.log(action);
  if (action === 'IMPORT') return 'red'
  else if (action === 'APPLICATION') return 'orange'
  else return 'green'
};
</script>
