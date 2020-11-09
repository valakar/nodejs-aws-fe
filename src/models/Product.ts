import * as Yup from 'yup';

export type Product = {
  id?: string,
  title: string,
  price: number,
  count: number,
  image?: string,
  description?: string,
  tier?: string,
  score?: number
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().required(),
  count: Yup.number().required(),
  image: Yup.string(),
  description: Yup.string(),
  tier: Yup.string(),
  score: Yup.number(),
});
