import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led team of 5 developers on critical projects',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client-facing web applications using React, Node.js, and cloud technologies.',
    achievements: [
      'Built 15+ responsive web applications',
      'Improved code quality with comprehensive test coverage',
      'Collaborated with design team on UX improvements',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2019 - 2020',
    description: 'Created engaging user interfaces and implemented responsive designs for various client projects.',
    achievements: [
      'Delivered 20+ successful client projects',
      'Implemented modern design systems',
      'Increased user engagement by 40%',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2018 - 2019',
    description: 'Started career building features for a fast-paced startup environment, learning modern web technologies.',
    achievements: [
      'Contributed to core product features',
      'Learned agile development methodologies',
      'Participated in code reviews and pair programming',
    ],
  },
];

export function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-up">
          Work Experience
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          My professional journey
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-blue-500 dark:bg-blue-600 border-4 border-white dark:border-gray-900 shadow-lg" />

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
