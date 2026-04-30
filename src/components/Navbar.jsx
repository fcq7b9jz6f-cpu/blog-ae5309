import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ui } from '../lib/theme';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'الأرشيف', path: '/archive' },
  { name: 'عن الكاتب', path: '/about' },
  { name: 'اتصل بنا', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ path, name }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `font-sans text-base font-medium relative hover:text-accent-1 transition-colors duration-300 ${isActive ? 'text-accent-1' : 'text-text'}`
      }
      end
    >
      {({ isActive }) => (
        <>
          {name}
          {isActive && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent-1 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <header className="bg-surface/80 backdrop-blur-lg sticky top-0 z-40 border-b border-border">
      <div
        className={`${ui.container} flex items-center justify-between h-20`}
      >
        <Link to="/" className="font-serif text-2xl font-bold text-text">
          مدوّنتي
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem key={link.path} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Link to="/newsletter" className={`${ui.btnPrimary} hidden sm:inline-flex !px-5 !py-2 !text-sm`}>
                اشترك الآن
            </Link>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-text hover:text-accent-1"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <nav className="flex flex-col items-center gap-4 py-8 px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 ${isActive ? 'text-accent-1' : 'text-text'}`
                }
                end
              >
                {link.name}
              </NavLink>
            ))}
             <Link to="/newsletter" onClick={() => setIsOpen(false)} className={`${ui.btnPrimary} mt-4`}>
                اشترك في النشرة
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

