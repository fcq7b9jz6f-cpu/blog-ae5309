
import React from 'react';
import { ui } from '../lib/theme';

export default function About() {
  return (
    <div className={ui.section}>
      <div className={`${ui.container} max-w-3xl`}>
        <h1 className={ui.h2}>عن الكاتب</h1>
        <div className="mt-6 text-lg text-text-prose leading-relaxed">
          <p>مطور واجهات أمامية وشغوف بمشاركة المعرفة التقنية مع المجتمع العربي.</p>
        </div>
      </div>
    </div>
  );
}
