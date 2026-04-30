# مدونة إديتوريال الشخصية

> ملف ذاكرة المشروع — يُحدَّث تلقائياً بعد كل توليد. الوكيل يقرأه أولاً قبل أي تعديل ليحافظ على الاتساق.

## الهوية البصرية
كلاسيكي مطبعي (Serif) مع مساحات بيضاء واسعة، تركيز عالي على الـ Typography والخطوط العربية التقليدية الفاخرة

## الصفحات (6)
- `/` — **الرئيسية**: عرض آخر 6 مقالات مميزة بصور كبيرة وتصميم مجلي
- `/archive` — **الأرشيف**: استعراض كافة المقالات مع خاصية التصفح الرقمي Pagination
- `/post/[slug]` — **تفاصيل المقال**: تجربة قراءة غامرة لمحتوى طويل يزيد عن 800 كلمة بتنسيق احترافي
- `/about` — **عن الكاتب**: سيرة ذاتية عميقة وفلسفة الكاتب في الكتابة
- `/contact` — **اتصل بنا**: نموذج تواصل مباشر
- `/newsletter` — **النشرة البريدية**: صفحة مخصصة للاشتراك في التحديثات الدورية

## المكونات المشتركة
- Navbar
- Footer
- HeroPostCard
- ArticleGrid
- PostContentRenderer
- PaginationControls
- NewsletterForm
- ContactForm
- SocialShareIcons
- ScrollProgressBar

## نموذج البيانات (collections)
- `posts` — fields: title, slug, content, excerpt, author, published_date, cover_image, category
- `subscribers` — fields: email, signup_date

## APIs خارجية مستخدمة
- (لا يوجد)

## ملفات المشروع
- /App.jsx
- /main.jsx
- App.jsx
- components/Footer.jsx
- components/Navbar.jsx
- lib/theme.js
- main.jsx
- styles/tailwind.css
- styles/tokens.css

## ملاحظات للجولات القادمة
- لا تُعد كتابة المكونات الموجودة من الصفر — استورد واستخدم.
- أي صفحة جديدة تُضاف يجب ربطها في Navbar وتسجيلها في App.jsx ضمن `<Routes>`.
- التزم بنفس `tokens.css` و `lib/theme.js`.

_تم التحديث تلقائياً._
