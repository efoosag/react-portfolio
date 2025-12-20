import React from 'react';

export default function Skills() {
  const skills = [
    { title: 'React', level: 'Comfortable' },
    { title: 'JavaScript (ES6+)', level: 'Comfortable' },
    { title: 'HTML / CSS', level: 'Comfortable' },
    { title: 'Tailwind CSS', level: 'Learning' },
    { title: 'Git & GitHub', level: 'Comfortable' },
    { title: 'TypeScript', level: 'Learning' },
  ];

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.title} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="font-semibold">{s.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
