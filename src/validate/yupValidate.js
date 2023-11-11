import { setLocale } from 'yup';
import { object, string, mixed } from 'yup';
// import * as yup from 'yup'; // 全て

setLocale({
  mixed: {
    default: '不正な値です。',
    required: ({ path }) => `${path}は必須の項目です。`,
  },
  string: {
    email: ({ path }) => `${path}の形式ではありません。`,
    url: ({ path }) => `${path}の形式ではありません。`,
  },
});

export const phoneSchema = object({
  phone: string().required()
  .matches(/[0-9-]+/, '電話番号は9桁以上である必要があります。')
  .min(9, '電話番号は9桁以上である必要があります。'),
});

export const nameSchema = object({
  name: string().required(),
});

export const emailSchema = object({
  name: string().email().required(),
});
