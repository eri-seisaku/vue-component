<template>
  <form @submit.prevent="submit">
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
</template>

<script setup>
import { ref } from 'vue';
const formData = ref({
  name: '',
  email: '',
  phone: '',
});

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const submit = () => {
    const { name, email, phone } = formData.value;

    const docDefinition = {
        content: [
            { text: 'TITLE', style: 'header' },
            { text: `Name: ${name}`, style: 'subheader' },
            { text: `Email: ${email}`, style: 'subheader' },
            { text: `Tel: ${phone}`, style: 'subheader' },
        ],
        styles: {
            header: { fontSize: 18, bold: true },
            subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
        },
    };

    pdfMake.createPdf(docDefinition).open(); // pdfを開く
    // pdfMake.createPdf(docDefinition).download("form.pdf"); // pdfをダウンロード
};
</script>

