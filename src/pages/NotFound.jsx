
import React from 'react';
import { Link } from 'react-router-dom';
import { ui } from '../lib/theme';

export default function NotFound() {
  return (
    <div className={`${ui.section} text-center`}>
      <h1 className="text-9xl font-bold text-accent-1">404</h1>
      <p className="mt-4 text-2xl">الصفحة غير موجودة</p>
      <Link to="/" className={`${ui.btnPrimary} mt-8`}>العودة للرئيسية</Link>
    </div>
  );
}
