import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
      // Use saved theme
      setIsDark(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('portfolio-theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300"
      style={{ 
        borderColor: 'var(--border)'
      }}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* Sun icon (for light mode) */}
      <Sun 
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isDark 
            ? 'opacity-0 scale-90 rotate-90' 
            : 'opacity-100 scale-100 rotate-0'
        }`}
        style={{ color: 'var(--text-primary)' }}
      />
      
      {/* Moon icon (for dark mode) */}
      <Moon 
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isDark 
            ? 'opacity-100 scale-100 rotate-0' 
            : 'opacity-0 scale-90 -rotate-90'
        }`}
        style={{ color: 'var(--text-primary)' }}
      />
    </button>
  );
}