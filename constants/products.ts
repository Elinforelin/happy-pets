import { StaticImageData } from "next/image";

import toiletSmall01 from "../assets/toilets/pinksmallwith.jpg";
import toiletSmall02 from "../assets/toilets/brownsmallwith.jpg";
import toiletSmall03 from "../assets/toilets/redsmallwith.jpg";
import toiletSmall04 from "../assets/toilets/greensmallwith.jpg";

import toiletBig01 from "../assets/toilets/big/mintbigwith.jpg";
import toiletBig02 from "../assets/toilets/big/brownbigwith.jpg";
import toiletBig03 from "../assets/toilets/big/greybigwith.jpg";
import toiletBig04 from "../assets/toilets/big/greenbigwith.jpg";

import toiletModern01 from "../assets/toilets/modern/brownmodern.jpg";
import toiletModern02 from "../assets/toilets/modern/pinkmodern.jpg";
import toiletModern03 from "../assets/toilets/modern/greymodern.jpg";
import toiletModern04 from "../assets/toilets/modern/mintmodern.jpg";

import bluebowl from "../assets/bowls/bluebowl.jpg";
import yellowbowl from "../assets/bowls/yellownoleg.jpg";
import purplebowl from "../assets/bowls/purpledouble.jpg";
import greenebowl from "../assets/bowls/greennolegs.jpg";
import blue from "../assets/bowls/blue3.jpg";

import lopatki from "../assets/toilets/lopatki.jpg";

export interface ProductSizeType {
  name: string;
  productSize: string;
}

export type ProductTypes = {
  id: number;
  title: string;
  size: ProductSizeType[];
  image: StaticImageData;
  price: number;
};

export const toilets: ProductTypes[] = [
  {
    id: Date.now(),
    title: "Туалет для кішок «Дніпро» дрібний із сіткою",
    size: [
      { name: "Довжина", productSize: "370мм" },
      { name: "Ширина", productSize: "270мм" },
      { name: "Висота", productSize: "50мм" },
    ],
    image: toiletSmall01,
    price: 55,
  },
  {
    id: Date.now(),
    title: "Туалет для кішок «Дніпро» глубокий із сіткою",
    size: [
      { name: "Довжина", productSize: "400мм" },
      { name: "Ширина", productSize: "270мм" },
      { name: "Висота", productSize: "120мм" },
    ],
    image: toiletBig04,
    price: 95,
  },
  {
    id: Date.now(),
    title: "Туалет «Модерн» глибокий з сіткою",
    size: [
      { name: "Довжина", productSize: "400мм" },
      { name: "Ширина", productSize: "300мм" },
      { name: "Висота", productSize: "150мм" },
    ],
    image: toiletModern04,
    price: 317,
  },
  {
    id: Date.now(),
    title: "Лопатка",
    size: [{ name: "Довжина", productSize: "400мм" }],
    image: lopatki,
    price: 15,
  },
];
export const bowls: ProductTypes[] = [
  {
    id: Date.now(),
    title: "Миска для кошек и собак",
    size: [
      { name: "Об'єм", productSize: "450мм" },
      { name: "Діаметр", productSize: "170мм" },
      { name: "Висота", productSize: "55мм" },
    ],
    image: bluebowl,
    price: 17.5,
  },
  {
    id: Date.now(),
    title: 'Миска "кіт"',
    size: [
      { name: "Об'єм", productSize: "200мм" },
      { name: "Діаметр", productSize: "145мм" },
      { name: "Висота", productSize: "35мм" },
    ],
    image: yellowbowl,
    price: 15,
  },
  {
    id: Date.now(),
    title: "Миска з 2-х секцій",
    size: [
      { name: "Об'єм", productSize: "300мл + 200мл" },
      { name: "Довжина", productSize: "235мм" },
      { name: "Ширина", productSize: "160мм" },
      { name: "Висота", productSize: "50мм" },
    ],

    image: purplebowl,
    price: 25,
  },
  {
    id: Date.now(),
    title: 'Миска "персидский кіт"',
    size: [
      { name: "Об'єм", productSize: "350мл" },
      { name: "Довжина", productSize: "235мм" },
      { name: "Ширина", productSize: "175мм" },
      { name: "Висота", productSize: "35мм" },
    ],
    image: greenebowl,
    price: 25,
  },
  {
    id: Date.now(),
    title: "Миска з 3-х секцій",
    size: [
      { name: "Об'єм", productSize: "100мл + 250мл + 100мл" },
      { name: "Довжина", productSize: "190мм" },
      { name: "Ширина", productSize: "135мм" },
      { name: "Висота", productSize: "35мм" },
    ],
    image: blue,
    price: 30,
  },
];
