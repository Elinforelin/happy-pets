import { FC, useState, MouseEventHandler, MouseEvent } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { StaticImageData } from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";

import classes from "./index.module.scss";
import { colors } from "../../../constants/colors";

type ProductCardProps = {
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
const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  size,
  price,
}) => {
  return (
    <Card key={id} classes={{ root: classes.root }}>
      <CardContent>
        <CardMedia
          component="img"
          alt="toilet"
          image={image.src}
          classes={{ root: classes.cardMediaRoot }}
        />
        <Typography
          // gutterBottom
          variant="h5"
          component="div"
          height="50"
          classes={{ root: classes.typographyRoot }}
        >
          {title}
        </Typography>

        <div className={classes.sizeContainer}>
          <Typography
            // gutterBottom
            variant="subtitle1"
            component="div"
            classes={{ root: classes.typographyRootSize }}
          >
            Довжина {size.length}
          </Typography>
          <Typography
            // gutterBottom
            variant="subtitle1"
            component="div"
            classes={{ root: classes.typographyRootSize }}
          >
            Ширина {size.width}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            classes={{ root: classes.typographyRootSize }}
          >
            Висота {size.height}
          </Typography>
        </div>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          classes={{ root: classes.typographyRoot }}
        >
          {price} грн
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          classes={{ root: classes.typographyRootMoreInfo }}
        >
          Більше підробиць і кольорів у
          {
            <Link
              target="_blank"
              href="https://web.telegram.org/k/#@aleks_freedive"
              style={{ display: "flex", margin: "5px" }}
            >
              <TelegramIcon color="primary" />
            </Link>
          }
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default ProductCard;
