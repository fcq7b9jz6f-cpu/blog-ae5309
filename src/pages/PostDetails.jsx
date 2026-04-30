
import React from 'react';
import { useParams } from 'react-router-dom';
import { ui } from '../lib/theme';

export default function PostDetails() {
  const { slug } = useParams();
  return (
    <article className={`${ui.section} ${ui.container}`}>
      <h1 className={ui.h1}>تفاصيل المقال: {slug}</h1>
      <div className={`${ui.prose} mt-8`}>
        <p>محتوى المقال سيظهر هنا بناءً على الرابط التعريفي.</p>
      </div>
    </article>
  );
}
