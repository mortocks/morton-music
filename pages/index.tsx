import type { NextPage } from "next";
import { usePlayerContext } from "../context/PlayerContext";
import { useShoppingCart } from "use-shopping-cart";
import ProductCard from "../components/commerce/ProductCard";

const Home: NextPage = () => {
  const { isVisible, toggleVisible } = usePlayerContext();
  const { addItem, cartDetails = {} } = useShoppingCart();

  const products = Object.keys(cartDetails).map((sku) => {
    return cartDetails[sku];
  });

  return (
    <div className="container py-10">
      Homepage {isVisible ? "true" : "false"} <br />
      <button onClick={toggleVisible}>Toggle</button>
      <button
        onClick={() => {
          addItem({
            sku: "1234",
            name: "STUFF",
            price: 10 * 100,
            currency: "AUD",
          });
        }}
      >
        Add to cart
      </button>
      <div className="flex grid grid-cols-4 gap-4">
        <ProductCard
          product={{
            sku: "prod_LyKPHsdZ5xK33C",
            name: "iPHone",
            currency: "AU",
            price: 10 * 100,
          }}
        />
        <ProductCard
          product={{
            sku: "456",
            name: "iPad",
            currency: "AU",
            price: 20 * 100,
          }}
        />
        <ProductCard
          product={{
            sku: "789",
            name: "Music",
            currency: "AU",
            price: 20 * 100,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
