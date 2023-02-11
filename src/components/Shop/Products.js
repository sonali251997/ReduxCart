import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUUMY_ITEM = [
  {
    id: 1,
    price: 5,
    title: " My first book",
    description: "This is my first book ",
  },
  {
    id: 2,
    price: 6,
    title: " My second book",
    description: "This is my second book ",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUUMY_ITEM.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
