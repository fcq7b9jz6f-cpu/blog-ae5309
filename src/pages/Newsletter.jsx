
import React from 'react';
import { ui } from '../lib/theme';

export default function Newsletter() {
  return (
    <div className={ui.section}>
      <div className={`${ui.container} text-center max-w-2xl`}>
        <h1 className={ui.h2}>النشرة البريدية</h1>
        <p className="mt-4 text-text-muted">اشترك لتصلك أحدث المقالات مباشرة على بريدك الإلكتروني.</p>
        <div className="mt-8 flex gap-2">
          <input className={ui.input} placeholder="your@email.com" type="email" />
          <button className={ui.btnPrimary}>اشترك</button>
        </div>
      </div>
    </div>
  );
}
