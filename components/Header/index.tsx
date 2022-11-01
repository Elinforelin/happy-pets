import { FC } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

import logo from "../../assets/f96d59_9ebad223fa584fdbbabef65bd18ec669_mv2.png";
import classes from "./index.module.scss";

const navigationLinks = [
  { href: "#bowls", title: "Миски для котів і собак" },
  { href: "#bowlsForTerrarium", title: "Миски для терраріуму" },
  { href: "#parrot", title: "Товари для папуг" },
  { href: "#feedersAndDrinkers", title: "Годівниці та напувалки" },
  { href: "#accessories", title: "Аксесуари для тварин" },
];

const selectColor = (title: string) => {
  if (title === "Миски для котів і собак") return classes.red;
  if (title === "Миски для терраріуму") return classes.yellow;
  if (title === "Товари для папуг") return classes.green;
  if (title === "Годівниці та напувалки") return classes.blue;
  if (title === "Аксесуари для тварин") return classes.purple;
};

const Header: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img src={logo.src} alt="logo" />
      </div>

      <div className={classes.navigation}>
        {navigationLinks.map(({ href, title }) => (
          <Button
            key={href}
            classes={{
              root: selectColor(title),
            }}
          >
            <Link href={href}>{title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Header;
