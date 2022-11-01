import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import MainImage from "../components/MainImage";
import ProductsSection from "../components/ProductsSection";
import { bowls, toilets } from "../constants/products";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MainImage />
      <ProductsSection
        sectionId="bowls"
        products={bowls}
        sectionTitle="Миски для котів і собак"
      />
      <ProductsSection
        sectionId="accessories"
        products={toilets}
        sectionTitle="Аксесуари для тварин"
      />
    </div>
  );
}
