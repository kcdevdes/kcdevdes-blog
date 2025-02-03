# 🥳 Introduction

This repository contains the source code and blog posts for my static blog built with Next.js, TypeScript, and Tailwind CSS. This repository was forked from [yooji0415/maintainhoon_blog](https://github.com/yooji0415/maintainhoon_blog)

Blog: [https://kcdevdes.com](https://kcdevdes.com)

## ⚙️ How to Run

Clone the repository and run the following commands:

```bash
yarn install
yarn build
yarn start
```

## 📂 Folder Structure

```plain
markdown
Copy
Edit
blog
├─ .eslintrc.js
├─ .prettierrc.js
├─ README.md
├─ components
│ ├─ BlogPost.tsx
│ ├─ CategoryList.tsx
│ ├─ Footer.tsx
│ ├─ Header.tsx
│ ├─ Layout.tsx
│ ├─ Nav.tsx
│ ├─ PostList.tsx
│ └─ Utterances.tsx
├─ contentlayer.config.ts
├─ data
│ ├─ categorys.ts
│ └─ nav.ts
├─ next-sitemap.config.js
├─ next.config.js
├─ package.json
├─ pages
│ ├─ \_app.tsx
│ ├─ \_document.tsx
│ ├─ \_error.tsx
│ ├─ blog
│ │ ├─ index.tsx
│ │ └─ post
│ │ └─ [slug].tsx
│ ├─ category
│ │ └─ index.tsx
│ └─ index.tsx
├─ postcss.config.js
├─ posts
├─ public
├─ styles
│ └─ globals.css
├─ tailwind.config.js
├─ tsconfig.json
└─ yarn.lock
```
