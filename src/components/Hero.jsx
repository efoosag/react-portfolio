import { motion } from "framer-motion";

import image from "../images/vict_pic.jpeg";

export default function Hero() {
  
  return (
    <section
      id="home"
      className="section min-h-[85vh] flex items-center justify-center px-6 py-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="
           w-52 h-52 
          sm:w-64 sm:h-64 
          md:w-72 md:h-72 
          lg:w-80 lg:h-80 
          rounded-full 
          overflow-hidden 
          shadow-xl 
          border-2 border-blue-100        
        "
          >
            <span className="text-white text-xl md:text-2xl font-semibold">
              <img src={image} alt="Victor" />
            </span>
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white"
          >
            Hi, I'm <span className="text-red-600">Victor</span>
          </motion.h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I’m a React Frontend Developer specializing in building responsive,
            accessible, and user-focused web applications using React,
            JavaScript, and modern CSS frameworks. I’m open to freelance
            opportunities and collaborative roles where I can contribute to
            high-quality digital products.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            View My Work
          </motion.a>
        </div>
      </div>
      
    </section>
  );
}
