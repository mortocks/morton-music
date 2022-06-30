import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "../components/layouts/Layout";
import client from "../apollo-client";
import { PlayerProvider } from "../context/PlayerContext";
import { CartProvider } from "use-shopping-cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        successUrl="https://stripe.com"
        cancelUrl="https://twitter.com/dayhaysoos"
        stripe="pk_test_51LGJOrI3F4DAbzhtFpGoGRzNG0vDhV3biwFsUP9QQDimLLvl0xz1YGPsIu5wmuCH18fYODd3f1AIvZj0ZcuK7yX000Y1JJb5L8"
        currency="AUD"
        loading={<p aria-live="polite">Loading redux-persist...</p>}
      >
        <PlayerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlayerProvider>
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
