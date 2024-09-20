import { motion } from "framer-motion";

const Screen = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
    >
      <div className="md:w-[865px] mx-auto text-gray-700 dark:text-white md:mt-10 mt-7 pb-20 font-popins px-2 md:px-0">
        {children}
      </div>
    </motion.div>
  );
};

export default Screen;