import dynamic from "next/dynamic";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../partials/Header";
import { usePlayerContext } from "../../context/PlayerContext";

import Cart from "../../components/partials/Cart";
const Playlist = dynamic(() => import("../audio/Playlist"), { ssr: false });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isVisible } = usePlayerContext();
  return (
    <>
      <Header />
      <main>{children}</main>
      <Cart />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-200 left-10 absolute"
            initial={{ bottom: -400 }}
            animate={{ bottom: 10 }}
            exit={{ bottom: -400 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              type: "spring",
            }}
          >
            <Playlist />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
