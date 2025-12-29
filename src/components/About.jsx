export default function About() {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git & Github",
    "Responsive Design",
    "REST APIs",
    "UI/UX Fundamentals",
  ];
  return (
    <section
      id="about"
      className="section py-20 container mx-auto px-6 text-center"
    >
      <h2 className="text-3xl font-bold dark:text-white mb-6">About Me</h2>

      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        I'm an entry-level React Frontend Developer who loves creating clean,
        intuitive, and user-friendly interfaces.  
        I specialize in JavaScript, React, TailwindCSS, and building responsive layouts.
        Always learning, improving, and exploring new tools & frontend technologies.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        {/* Skill Tags */}
      
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full"
          >
            {skill}
          </span>
        ))}
      
        
      </div>
    </section>
  );
}
