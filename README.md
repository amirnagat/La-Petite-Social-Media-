# La'petite Social Media 🎨
[![Lovable.ai](https://img.shields.io/badge/Developed%20with-Lovable.ai-e83e8c?style=for-the-badge)](https://lovable.dev/projects/<REPLACE_WITH_PROJECT_ID>)
[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://social-pro-palette.lovable.app)
[![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=for-the-badge)](https://vitejs.dev/)

**<p align="center"> <img src="<REPLACE_WITH_LINK_TO_YOUR_LOGO_IF_EXISTS>" alt="La'petite Logo" width="200"/> </p>**

**La'petite** הוא אתר תדמיתי מתקדם עבור עסק לניהול מדיה חברתית ויצירת תוכן לעסקים. האתר מעוצב בצורה נקייה, מודרנית ורספונסיבית, ומטרתו להציג את השירותים, הפורטפוליו ותהליך העבודה של העסק בצורה המושכת והמקצועית ביותר.

---

## ✨ פיצ'רים עיקריים

| פיצ'ר | תיאור |
|---|---|
| 🚀 **Hero Section** | כותרת ראשית חזקה וברורה עם קריאה לפעולה (CTA). |
| 📹 **עבודות נבחרות** | גלריית פורטפוליו מבוססת וידאו, המציגה סרטונים נבחרים המופעלים אוטומטית (Autoplay) בגלילה. |
| 🛠️ **שירותים** | הצגת שירותי העסק בניהול סושיאל, יצירת תוכן, ועוד, בצורת כרטיסיות. |
| 🪜 **תהליך עבודה** | הצגת שלבי העבודה המשותפת מול הלקוח בצורה ברורה ומובנית. |
| 📊 **סטטיסטיקות מונפשות** | מונים דינמיים הנספרים למעלה בעת הגעה אליהם בגלילה (Stats Counter with ScrollTrigger). |
| 💬 **טופס יצירת קשר** | שילוב טופס ליצירת קשר ישירה דרך ה-WhatsApp של העסק. |
| 📱 **עיצוב רספונסיבי** | התאמה מלאה למכשירים ניידים, טאבלטים ומחשבים שולחניים. |

---

## 🛠️ טכנולוגיות

הפרויקט נבנה באמצעות הכלים החדישים ביותר בתחום ה-Frontend:

| טכנולוגיה | שימוש |
|---|---|
| ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black) | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | Type Safety |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | Build Tool |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white) | Styling |
| ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?logo=framer&logoColor=white) | אנימציות מתקדמות |
| ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?logo=shadcnui&logoColor=white) | קומפוננטות UI מודולריות |
| ![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=white) | ניווט בין דפים (אופציונלי) |

---

## 📁 מבנה הפרויקט

הקוד מאורגן בצורה נקייה ומודולרית בתוך תיקיית `src/`:

```bash
src/
├── assets/             # תמונות, לוגו, ואייקונים
├── components/         # קומפוננטות React לשימוש חוזר
│   ├── ui/             # קומפוננטות של shadcn/ui
│   ├── Header.tsx      # ניווט עליון
│   ├── Hero.tsx        # סקשן ראשון באתר
│   ├── Portfolio.tsx   # גלריית פורטפוליו וידאו
│   ├── Services.tsx    # כרטיסיות שירותים
│   ├── Workflow.tsx    # שלבי תהליך העבודה
│   ├── Stats.tsx       # סטטיסטיקות מונפשות בגלילה
│   ├── ClientsBar.tsx  # לוגואים של לקוחות
│   ├── Footer.tsx      # פוטר האתר וטופס קשר
│   └── WhatsAppButton.tsx # כפתור וואטסאפ צף
├── pages/              # עמודי האתר (Router)
│   └── Index.tsx       # עמוד הבית
├── lib/                # פונקציות עזר (Utils)
└── index.css           # עיצוב גלובלי והגדרות Tailwind
