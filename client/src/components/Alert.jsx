import { motion } from "framer-motion";

function Alert({ title, message }) {

  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className={`bg-red-500/50 border-red-500 text-white px-5 py-2 border-l-4 border- flex flex-col items-start`}
    >
      <h2 className="font-semibold">{ title }</h2>
      <p className="font-light">{ message }</p>
    </motion.div>
  );
}

export default Alert;
