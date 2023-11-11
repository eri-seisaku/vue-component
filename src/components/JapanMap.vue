<template>
  <h2 class="text-h5">HOME</h2>
  <p class="mt-8">
    このサイトはVue3 + Vuetify3 + Firebase9で作成しました。<br>
    数字はバージョンを意味します。管理画面とWebサイトの大きく2つの役割があるWebアプリを制作する機会を頂き、Vueの基本勉強を含めて約2ヶ月間で制作しました。
    このサイトのLISTページにある人物はすべて架空の人物です。
    下記はvueを利用して都道府県を作成しました。
    クリックすると八地方区分のエリア名が下に表示されます。
  </p>
  <v-container>
    <v-row no-gutters class="map">
      <v-col cols="1" v-for="index in 144">
        <div
          :class="getDynamicClass(index)"
          @click="getNumber(index)"
        >
          {{ index }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <p>あなたがクリックしたのは<span style="color: red;">{{ message }}エリア</span>です</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('');

const areas = [
  { numbers: [10, 11, 12, 22, 23, 24, 34], className: 'hokkaido', areaName: '北海道' },
  { numbers: [58, 59, 60, 70, 71, 72, 83, 84, 95, 96], className: 'tohoku', areaName: '東北' },
  { numbers: [82, 92, 93, 94, 104, 105, 116, 117, 128], className: 'chubu', areaName: '中部' },
  { numbers: [106, 107, 108, 118, 119, 120], className: 'kanto', areaName: '関東' },
  { numbers: [90, 91, 102, 103, 114, 115, 127], className: 'kinki', areaName: '近畿' },
  { numbers: [88, 89, 100, 101], className: 'chugoku', areaName: '中国' },
  { numbers: [112, 113, 124, 125], className: 'shikoku', areaName: '四国' },
  { numbers: [98, 99, 110, 111, 122, 123, 133], className: 'kyushu_okinawa', areaName: '九州沖縄' }
];

const getDynamicClass = (index) => {
  const numberClass = {
    gray: true,
    area: true
    // white: true,
  };

  const area = areas.find(area => area.numbers.includes(index));
  if (area) {
    numberClass[area.className] = true;
  }

  return numberClass;
};

const getNumber = (index) => {
  const area = areas.find(area => area.numbers.includes(index));
  if (area) {
    message.value = area.areaName;
  }
};


</script>
<style>
a {
  text-decoration: none;
  color: black;
}
.map {
  max-width: 448px;
}
.area {
  height: 2em;
}
.white {
  background: #fff;
}
.gray {
  background: gray;
  border: 1px solid #fff;
}
.hokkaido {
  background: #7ab7f0;
  border-style: none;
  cursor: pointer;
}
.tohoku {
  background: #8be1f9;
  border-style: none;
  cursor: pointer;
}
.chubu {
  background: #fffb90;
  border-style: none;
  cursor: pointer;
}
.kanto {
  background: #a5cd7c;
  border-style: none;
  cursor: pointer;
}
.kinki {
  background: #f8b87b;
  border-style: none;
  cursor: pointer;
}
.chugoku {
  background: #f7968e;
  border-style: none;
  cursor: pointer;
}
.shikoku {
  background: #fab3eb;
  border-style: none;
  cursor: pointer;
}
.kyushu_okinawa {
  background: #c7adf7;
  border-style: none;
  cursor: pointer;
}
</style>
