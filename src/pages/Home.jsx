
import React from 'react';
import { ui } from '../lib/theme';

export default function Home() {
  return (
    <div className={ui.section}>
      <div className={ui.container}>
        <h1 className={ui.h1}>أهلاً بك في مدونتي الشخصية</h1>
        <p className="mt-4 text-xl text-text-muted">مساحة لمشاركة الأفكار والخبرات التقنية.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className={ui.card}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">مقال تجريبي {i}</h3>
                <p className="text-text-muted mb-4">هذا نص تجريبي لوصف محتوى المقال الذي سيظهر هنا لاحقاً.</p>
                <button className="text-accent-1 font-semibold">اقرأ المزيد ←</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
