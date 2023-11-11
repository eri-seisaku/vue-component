<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col cols="12" md="6">
        <download-csv
          :data="csvData">
          <v-btn>DOWNLOAD</v-btn>
        </download-csv>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

// 初期化
const csvData = ref([
  { name: 'Joe', surname: 'Roe' },
  { name: 'John', surname: 'Doe' }
]);
const labels = ref({
  id: {title: "ID"},
  name: {title: "NAME"},
  email: {title: "EMAIL"},
});



const download = () => {
  console.log("click");
};



</script>
