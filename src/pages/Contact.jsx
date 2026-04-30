
import React from 'react';
import { ui } from '../lib/theme';

export default function Contact() {
  return (
    <div className={ui.section}>
      <div className={`${ui.container} max-w-xl`}>
        <h1 className={ui.h2}>اتصل بنا</h1>
        <form className="mt-8 space-y-4">
          <input className={ui.input} placeholder="الاسم" type="text" />
          <input className={ui.input} placeholder="البريد الإلكتروني" type="email" />
          <textarea className={ui.input} placeholder="رسالتك" rows="4"></textarea>
          <button className={ui.btnPrimary} type="button">إرسال</button>
        </form>
      </div>
    </div>
  );
}
