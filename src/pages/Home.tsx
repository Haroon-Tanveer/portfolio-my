import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent animate-slide-up">
            John Doe
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full Stack Developer & Designer
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting beautiful, functional web experiences with modern technologies.
            Passionate about clean code and intuitive user interfaces.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/projects"
              className="group px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}
