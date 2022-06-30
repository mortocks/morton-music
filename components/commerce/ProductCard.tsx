import { useShoppingCart } from "use-shopping-cart";
import { Product } from "../../types";
type CardLayoutProps = {
  title: string;
  cartQty: number;
  handleAddToCart: () => void;
};

const CardLayout = ({
  title,
  cartQty,
  handleAddToCart,
}: CardLayoutProps): JSX.Element => (
  <article className="mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer">
    <section
      className="content bg-cover bg-center h-64 rounded-2xl"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=100)",
      }}
    >
      <div className="flex items-end w-full h-full bg-black bg-opacity-20 text-white text-sm font-bold  p-4 rounded-2xl">
        <div className="w-1/2 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
          <span>4116</span>
        </div>
        <div className="w-1/2 flex items-center flex-row-reverse">
          <svg
            className="w-6 h-6 ml-2 place-items-end group-hover:animate-ping absolute "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <svg
            className="w-6 h-6 ml-2 place-items-end relative"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span className="place-items-end">16</span>
        </div>
      </div>
    </section>

    <div className="my-5 p-4 flex">
      <img
        className="w-10 h-10 rounded-full "
        src="https://images.generated.photos/6iXTm1iVJzoRHx2m_uKRp222qguutiVLOUVlTe_l3iA/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjMwNDYuanBn.jpg"
        alt=""
      />
      <div className="w-full flex justify-end space-x-1">
        <img
          className="w-10 h-10 rounded-md"
          src="https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=100"
          alt=""
        />
        <img
          className="w-10 h-10 rounded-md"
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=100"
          alt=""
        />
        <img
          className="w-10 h-10 rounded-md"
          src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZXxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=100"
          alt=""
        />
      </div>
    </div>
    <div className="mt-14 px-4">
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgba(0,0,0,0.6)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        ></path>
      </svg>
      <h2 className="mt-4 text-base font-medium text-gray-400">
        Seljalandsfoss Waterfall, Iceland
      </h2>
      <p className="mt-2 text-2xl text-gray-700">{title}</p>

      <button
        onClick={handleAddToCart}
        className="items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-100"
      >
        Add to cart ({cartQty})
      </button>
    </div>
  </article>
);

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, cartDetails = {} } = useShoppingCart();

  const qty = cartDetails[product.sku]?.quantity || 0;

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <CardLayout
      title={product.name}
      cartQty={qty}
      handleAddToCart={handleAddToCart}
    />
  );
};

export { CardLayout };

export default ProductCard;
