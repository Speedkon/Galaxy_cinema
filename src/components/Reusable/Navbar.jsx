import React from 'react';

// Reusable Component 3: Навигационная панель (для демонстрации Navigation Screen)
const Navbar = ({ activeLink }) => {
  const links = [
    { name: 'Movies', href: '/movies' },
    { name: 'My Tickets', href: '/tickets' },
    { name: 'Login', href: '/login' },
  ];

  return (
    // Navigation Screen - Responsive: hidden on small screens, full on large
    <nav className="bg-gc-dark sticky top-0 z-50 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gc-primary">Galaxy Cinema</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out
                    ${activeLink === link.name ? 'bg-gray-900 text-gc-primary' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile Menu Icon (for responsiveness demo) */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {/* Simple menu icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;