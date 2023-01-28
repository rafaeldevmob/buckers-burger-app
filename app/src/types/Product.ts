// export type Product = {
//   _id: string;
//   name: string;
//   descritption: string;
//   price: number;
//   ingredients: {
//         name: string;
//         _id: string;
//       }[]
// }
export type Product = {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: {
    name: string;
    _id: string;
  }[];
}
