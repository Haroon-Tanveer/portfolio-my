import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/skills', label: 'Skills', icon: Code },
  { path: '/projects', label: 'Projects', icon: Briefcase },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-1 sm:space-x-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`group relative px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  location.pathname === path
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">{label}</span>
                {location.pathname === path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
