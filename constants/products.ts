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

export type ProductTypes = {
  id: number;
  title: string;
  size: {
    length?: string;
    volume?: string;
    diameter?: string;
    width?: string;
    height?: string;
  };
  image: StaticImageData;
  price: number;
};

export const toilets: ProductTypes[] = [
  {
    id: Date.now(),
    title: "Туалет для кішок «Дніпро» дрібний із сіткою",
    size: {
      length: "370мм",
      width: "270мм",
      height: "50мм",
    },
    image: toiletSmall01,
    price: 50,
  },
  {
    id: Date.now(),
    title: "Туалет для кішок «Дніпро» глубокий із сіткою",
    size: {
      length: "400мм",
      width: "270мм",
      height: "120мм",
    },
    image: toiletBig04,
    price: 100,
  },
  {
    id: Date.now(),
    title: "Туалет «Модерн» глибокий з сіткою",
    size: {
      length: "400мм",
      width: "300мм",
      height: "150мм",
    },
    image: toiletModern04,
    price: 200,
  },
];
export const bowls: ProductTypes[] = [
  {
    id: Date.now(),
    title: "Миска для кошек и собак",
    size: {
      volume: "450мм",
      diameter: "170мм",
      height: "55мм",
    },
    image: bluebowl,
    price: 50,
  },
  {
    id: Date.now(),
    title: 'Миска "кіт"',
    size: {
      volume: "200мм",
      diameter: "145мм",
      height: "35мм",
    },
    image: yellowbowl,
    price: 100,
  },
  {
    id: Date.now(),
    title: "Миска з 2-х секцій",
    size: {
      volume: "300мл + 200мл",
      length: "235мм",
      width: "160",
      height: "50мм",
    },
    image: purplebowl,
    price: 200,
  },
  {
    id: Date.now(),
    title: 'Миска "персидский кіт"',
    size: {
      volume: "350мл",
      length: "235мм",
      diameter: "175мм",
      height: "35мм",
    },
    image: greenebowl,
    price: 200,
  },
  {
    id: Date.now(),
    title: "Миска з 3-х секцій",
    size: {
      volume: "100мл + 250мл + 100мл",
      length: "190мм",
      width: "135мм",
      height: "35мм",
    },
    image: blue,
    price: 200,
  },
];
