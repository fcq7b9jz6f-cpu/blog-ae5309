import React from 'react';
import { Link } from 'react-router-dom';
import { ui } from '../lib/theme';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className={`${ui.container} ${ui.section} !py-12 sm:!py-16 lg:!py-20`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-right">
          
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link to="/" className="font-serif text-2xl font-bold text-text mb-2">
              مدوّنتي
            </Link>
            <p className="text-text-muted max-w-md">
              مساحة للتأمل في التقنية، التصميم، وفنون الحياة. مقالات أسبوعية لاستكشاف الأفكار العميقة.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center justify-center gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-1 transition-colors"><Twitter size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-1 transition-colors"><Linkedin size={22} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-1 transition-colors"><Github size={22} /></a>
            </div>
            <div className='flex gap-6 font-sans text-sm'>
                <Link to="/about" className="text-text-muted hover:text-text">عن الكاتب</Link>
                <Link to="/archive" className="text-text-muted hover:text-text">الأرشيف</Link>
                <Link to="/contact" className="text-text-muted hover:text-text">اتصل بنا</Link>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-text-muted">
          <p>&copy; {currentYear} مدوّنتي. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
