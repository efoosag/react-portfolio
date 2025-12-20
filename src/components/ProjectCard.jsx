export default function ProjectCard({ title, img, desc, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={img} alt={title} className="rounded-lg mb-4" />

      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{desc}</p>

      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-blue-600 hover:text-blue-800"
      >
        View Project →
      </a>
    </div>
  );
}
