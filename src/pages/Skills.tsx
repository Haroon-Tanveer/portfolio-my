const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Figma', level: 88 },
      { name: 'CI/CD', level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-up">
          Skills & Technologies
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Technologies I work with and love
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500 rounded-full transition-all duration-1000 ease-out skill-bar"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Rust', 'Go', 'Three.js', 'WebGL', 'AI/ML', 'Web3'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
