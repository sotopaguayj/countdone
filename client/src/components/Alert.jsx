import { motion } from "framer-motion";

function Alert({ title, message, type }) {
  const bg = {
    success: "-green-500",
    error: "-red-500",
    warning: "-yellow-500",
  };

  const bgColor = "bg" + bg[type] + "/50".toString();
  const borderColor = "border" + bg[type].toString();

  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className={`${bgColor} ${borderColor} text-white px-5 py-2 border-l-4 border- flex flex-col items-start`}
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="font-light">{message}</p>
    </motion.div>
  );
}

export default Alert;
