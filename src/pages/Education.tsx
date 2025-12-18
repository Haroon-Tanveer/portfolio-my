import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Tech University',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering and Web Technologies. Graduated with honors.',
    achievements: [
      'GPA: 3.9/4.0',
      'Research in Progressive Web Applications',
      'Teaching Assistant for Web Development courses',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'State University',
    period: '2012 - 2016',
    description: 'Foundation in computer science principles, algorithms, and software development.',
    achievements: [
      'GPA: 3.7/4.0',
      "Dean's List all semesters",
      'Senior project: Social networking platform',
    ],
  },
];

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    title: 'Professional Scrum Master',
    issuer: 'Scrum.org',
    year: '2022',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    year: '2021',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    year: '2021',
  },
];

export function Education() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-up">
          Education
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Academic background and certifications
        </p>

        <div className="space-y-12 mb-16">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {edu.school}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap ml-4">
                  {edu.period}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-2">
                {edu.achievements.map((achievement) => (
                  <div key={achievement} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Certifications
        </h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${0.5 + index * 0.05}s` }}
            >
              <div className="flex items-start space-x-3 mb-3">
                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                {cert.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
