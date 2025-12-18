import { Heart, Coffee, Rocket } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white animate-slide-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-600 dark:to-cyan-500 shadow-2xl" />
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi! I'm a passionate full-stack developer with over 5 years of experience building
              web applications that people love to use. I believe in writing clean, maintainable
              code and creating interfaces that are both beautiful and intuitive.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in React, TypeScript, Node.js, and modern web technologies. I'm
              always excited to take on new challenges and collaborate on innovative projects.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Passionate</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated to creating exceptional user experiences
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 mb-4">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Detail-Oriented</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every pixel matters in crafting perfect designs
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovative</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Always exploring cutting-edge technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
