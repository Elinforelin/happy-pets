import green from "../assets/colors/green.png";
import pink from "../assets/colors/pink.png";
import red from "../assets/colors/red.png";
import brown from "../assets/colors/brown.png";
import blue from "../assets/colors/blue.png";
import { StaticImageData } from "next/image";

type ColorsType = {
  color: StaticImageData;
  alt: string;
};

export const colors: ColorsType[] = [
  { color: green, alt: "green" },
  { color: pink, alt: "pink" },
  { color: red, alt: "red" },
  { color: brown, alt: "brown" },
  { color: blue, alt: "blue" },
];
