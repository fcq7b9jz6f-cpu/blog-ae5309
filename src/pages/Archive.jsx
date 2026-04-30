
import React from 'react';
import { ui } from '../lib/theme';

export default function Archive() {
  return (
    <div className={ui.section}>
      <div className={ui.container}>
        <h1 className={ui.h2}>أرشيف المقالات</h1>
        <div className="mt-8 space-y-4">
          <p className="text-text-muted italic">لا يوجد مقالات حتى الآن.</p>
        </div>
      </div>
    </div>
  );
}
