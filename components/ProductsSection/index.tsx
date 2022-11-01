import { FC } from "react";

import classes from "./index.module.scss";
import { ProductTypes } from "../../constants/products";
import ProductCard from "./ProductCard";

type ProductsSectionProps = {
  sectionId: string;
  products: ProductTypes[];
  sectionTitle: string;
};

const ProductsSection: FC<ProductsSectionProps> = ({
  sectionId,
  products,
  sectionTitle,
}) => {
  const selectTitle = (title: string) => {
    if (title === "Миски для котів і собак") return classes.titleRed;
    if (title === "Аксесуари для тварин") return classes.titlePurple;
  };

  return (
    <section id={sectionId} className={classes.container}>
      <h1 className={selectTitle(sectionTitle)}>{sectionTitle}</h1>
      <div className={classes.productsContainer}>
        {products.map(({ id, title, image, size, price }) => (
          <ProductCard
            key={id + title}
            title={title}
            image={image}
            size={size}
            price={price}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
