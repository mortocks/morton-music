import Stripe from "stripe";
import { Product } from "../types";

const stripe = new Stripe(
  "sk_test_51LGJOrI3F4DAbzhtdna7pd4CINhLJZKS5yzTJYxzXDUnCdsNQmZ9TkrCKV8ZaakmeovnVOIrAmE11cWqfBcckn9E00bghDmOj5",
  { apiVersion: "2020-08-27" }
);

export const getAllStripeProducts = async () => {
  const payload = await stripe.products.list({
    limit: 100,
  });

  if (payload.has_more) {
    // TODO
  }
  return payload.data;
};

export const syncNextProductsToStripe = async (products: [Product]) => {
  const stripeProducts = await getAllStripeProducts();
  const stripeSKU = stripeProducts.map((p) => p.id);
  products.forEach((p) => {
    if (stripeSKU.includes(p.sku)) {
      // Do update
    } else {
      // Do delete
    }
  });
};
