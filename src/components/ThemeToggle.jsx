import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import {cn} from "@/lib/utils";

export const ThemeToggle = ({ className = "" }) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            // Default to dark mode if no theme is set or if theme is 'dark'
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                'p-2 rounded-full transition-colors duration-300 hover:bg-secondary',
                'focus:outline-none',
                className
            )}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? (
                <Sun className='h-5 w-5 text-yellow-500' />
            ) : (
                <Moon className='h-5 w-5 text-slate-600' />
            )}
        </button>
    );
}