import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts, interactive maps, and personalized weather alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics platform for tracking social media performance with data visualization and automated reports.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Express', 'MongoDB', 'D3.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support, SEO optimization, and content management system.',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Prisma', 'MDX', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-up">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          A selection of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
