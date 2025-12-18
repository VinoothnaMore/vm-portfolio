// components/Navbar.tsx
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Hobbies', href: '/hobbies' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 h-16 flex justify-center items-center">
        
        {/* Navigation - Centered for Web */}
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-indigo-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}