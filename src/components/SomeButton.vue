<template>
  <div class="ma-4">

    <div class="d-flex justify-space-around ma-8">
      <v-btn @click="moveNextScreen">NEXT PAGE</v-btn>
      <v-btn @click.prevent="exportPDF">DOWNLOAD PDF</v-btn>
    </div>

    <!-- Formの内容をPDFに変換 -->
    <form @submit.prevent="exportPDF">
      <label>名前：</label>
      <v-text-field
        v-model="formData.name"
        variant="outlined"
      ></v-text-field>
      <label>メールアドレス：</label>
      <v-text-field
        v-model="formData.email"
        variant="outlined"
      ></v-text-field>
      <label>電話番号：</label>
      <v-text-field
        v-model="formData.phone"
        variant="outlined"
      ></v-text-field>
      <v-btn type="submit" variant="outlined">送信</v-btn>
    </form>

  </div>
</template>

<script setup>
// Vue
import { ref } from 'vue';

// moveNextScreen
import { useRouter } from 'vue-router';
const router = useRouter(); // ルーターインスタンスを取得
const moveNextScreen = () => {
  router.push('/check');
}

// exportPdf
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const formData = ref({
  name: '',
  email: ''
});

pdfMake.fonts = {
  GenShin: {
    normal: 'GenShinGothic-Normal-Sub.ttf',
    bold: 'GenShinGothic-Normal-Sub.ttf',
    italics: 'GenShinGothic-Normal-Sub.ttf',
    bolditalics: 'GenShinGothic-Normal-Sub.ttf'
  }
};


const exportPDF = () => {
    const { name, email, phone } = formData.value;

    const docDefinition = {
        content: [
            { text: 'Vue 3フォームから生成されたPDF', style: 'header' },
            { text: `名前: ${name}`, style: 'subheader' },
            { text: `Eメール: ${email}`, style: 'subheader' },
            { text: `電話番号: ${phone}`, style: 'subheader' },
        ],
        styles: {
            header: { fontSize: 18, bold: true },
            subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
            // 使用するフォントを指定
            defaultStyle: { font: 'GenShin' }
        },
    };

    // pdfMake.createPdf(docDefinition).open();
    pdfMake.createPdf(docDefinition).download("出力テスト.pdf");
};

// const exportPDF = () => {
//   const { name, email } = formData.value;

//   const docDefinition = {
//     content: [
//       {
//         layout: 'lightHorizontalLines', // optional
//         table: {
//           // headers are automatically repeated if the table spans over multiple pages
//           // you can declare how many rows should be treated as headers
//           headerRows: 1,
//           widths: ['*', 'auto', 100, '*'],

//           body: animals
//         }
//       }
//     ]
//   }
//   const pdf = pdfMake.createPdf(docDefinition)
//   pdf.download()
// };


</script>

