import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { EASE } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export function PageWrapper({ children, showFooter = true }: PageWrapperProps) {
  return (
    <>
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative"
      >
        {children}
      </motion.main>
      {showFooter && <Footer />}
    </>
  );
}
