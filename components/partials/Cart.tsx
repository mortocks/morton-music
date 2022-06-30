import { useShoppingCart } from "use-shopping-cart";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Cart = () => {
  const {
    cartDetails = {},
    handleCartClick,
    shouldDisplayCart,
    removeItem,
    formattedTotalPrice,
    redirectToCheckout,
    checkoutSingleItem,
    cartCount,
  } = useShoppingCart();

  const items = Object.keys(cartDetails).map((sku) => {
    return cartDetails[sku];
  }, []);

  const handleCheckout = async () => {
    const result = await checkoutSingleItem("prod_LyKPHsdZ5xK33C");
    console.log("result", result);
  };
  const modalVariant: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 1.0,
      },
    },
    show: {
      opacity: 1,
    },
  };

  const cartCard: Variants = {
    hidden: {
      right: -400,
      opacity: 0,
      transition: {
        delay: 0,
        type: "spring",
        duration: 0.3,
      },
    },
    show: {
      right: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: "spring",
        duration: 0.3,
      },
    },
  };

  const list: Variants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 10,
      },
    },
  };

  const item: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {shouldDisplayCart && (
        <motion.div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
          variants={modalVariant}
          initial={"hidden"}
          animate={shouldDisplayCart ? "show" : "hidden"}
          exit={"hidden"}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                variants={cartCard}
                initial={"hidden"}
                animate={shouldDisplayCart ? "show" : "hidden"}
                //onClick={handleCartClick}
                className="fixed inset-y-0 right-0 flex max-w-full pl-10 p-5"
              >
                <div className="w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl rounded-lg">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleCartClick}
                          >
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <motion.ul
                            initial={"hidden"}
                            animate={"visible"}
                            variants={list}
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {items.map((item) => {
                              return (
                                <motion.li key={item.sku} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#"> {item.name}</a>
                                        </h3>
                                        <p className="ml-4">
                                          {item.formattedValue}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        #{item.sku}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {item.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() => removeItem(item.sku)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </motion.li>
                              );
                            })}
                          </motion.ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formattedTotalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          disabled={(cartCount || 0) < 1}
                          onClick={handleCheckout}
                          className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-orange-600 hover:text-orange-500"
                            onClick={handleCartClick}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Cart;
