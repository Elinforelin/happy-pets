import { FC, ReactNode, useState } from "react";
import classes from "../index.module.scss";
import { Typography } from "@mui/material";
import { ProductSizeType } from "../../../../constants/products";

type ProductSizeProps = {
  name: string;
  productSize: string;
};

export const ProductSize: FC<ProductSizeProps> = ({ name, productSize }) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        component="div"
        classes={{ root: classes.typographyRootSize }}
      >
        {name} {productSize}
      </Typography>
    </>
  );
};
