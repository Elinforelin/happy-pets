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
import { ProductSize } from "./ProductSize";
import { ProductSizeType } from "../../../constants/products";

type ProductCardProps = {
  id: number;
  title: string;
  size: ProductSizeType[];
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
          classes={{ root: classes.typographyRootTitle }}
        >
          {title}
        </Typography>

        <div className={classes.sizeContainer}>
          {size.map(({ name, productSize }) => (
            <>
              <ProductSize
                name={name}
                productSize={productSize}
                key={productSize}
              />
            </>
          ))}
        </div>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          classes={{ root: classes.typographyRootPrice }}
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
