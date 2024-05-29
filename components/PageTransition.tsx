"use client";
import { AnimatePresence } from "framer-motion";

const PageTransition = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <AnimatePresence>
            {children}
        </AnimatePresence>
    );
}

export default PageTransition;
