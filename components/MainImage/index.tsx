import { FC } from "react";

import classes from "./index.module.scss";
import image from "../../assets/happydog.jpg";

const MainImage: FC = () => {
  return (
    <div className={classes.container}>
      <img src={image.src} alt="dog" />
    </div>
  );
};

export default MainImage;
