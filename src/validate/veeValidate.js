import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import { required } from '@vee-validate/rules'; // 個別に取得
import AllRules from '@vee-validate/rules'; // 全て取得

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    ja,
  }),
});

localize('ja');


defineRule('phone', (value) => {
  if (!/^\d{10}$|^\d{11}$|^\d{2}-\d{4}-\d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{4}-\d{2}-\d{4}$|^\d{5}-\d{1}-\d{4}$/.test(value)) {
    return '有効な電話番号である必要があります。';
  }
  return true; // バリデーションが失敗した場合のエラーメッセージ
});

// サンプル
// defineRule('customRule', (value) => {
//   if (value === 'custom') {
//     return true; // バリデーションが成功した場合
//   }
//   return 'This field must be "custom"'; // バリデーションが失敗した場合のエラーメッセージ
// });

