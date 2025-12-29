import { motion } from "framer-motion";

export default function ProjectCard({ title, img, desc, link, live }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={img} alt={title} className="flex grow rounded-lg mb-4" />

      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{desc}</p>

      <div className="flex justify-between items-center px-5">
        <a
          href={live}
          target="_blank"
          className="inline-block text-blue-600 hover:text-blue-800"
        >
          View Project →
        </a>
        <motion.a
          href={link}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Github
        </motion.a>
      </div>
    </div>
  );
}
