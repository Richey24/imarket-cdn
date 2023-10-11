import { Variants, motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopContainerVariants: Variants = {
     hide: { opacity: 0, y: 100 },
     show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
     const { scrollYProgress } = useScroll();
     const controls = useAnimationControls();

     const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

     const scrollToTop = () => {
          if (typeof window !== "undefined") {
               if (!isBrowser()) return;
               window.scrollTo({ top: 0, behavior: "smooth" });
          }
     };

     useEffect(() => {
          return scrollYProgress.on("change", (latestValue) => {
               if (latestValue > 0.25) {
                    controls.start("show");
               } else {
                    controls.start("hide");
               }
          });
     });

     return (
          <motion.button
               //    id="scroll-top"
               className=" tw-bg-gray-500  tw-fixed tw-bottom-0 tw-right-0 tw-p-10 tw-h-14 tw-w-14 tw-flex tw-items-center tw-justify-center"
               variants={ScrollToTopContainerVariants}
               initial="hide"
               animate={controls}
               onClick={scrollToTop}
          >
               <span className="tw-text-white tw-text-lg">
                    <FaChevronUp />
               </span>
          </motion.button>
     );
}

export default ScrollToTopButton;
