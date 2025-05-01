# 📰 React News Portal

A modern, responsive news portal built with **React**, **Tailwind CSS**, and **React Router**, showcasing categorized news, real-time updates, and social integration features.

---

## 🔧 Features

- 📌 **Dynamic Category Filtering**:
  - Load news by category ID using URL params (`/category/:id`)
  - ID `0` shows all news
  - ID `1` filters for `today's picks`
- 📰 **Reusable NewsCard Component**:
  - Displays image, title, author, date, views, and rating
- 🚀 **Live Scrolling Headlines** via [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)
- 🧭 **Left & Right Sidebars**:
  - Left: Categories (fetched from `/categories.json`)
  - Right: Social login, "Find Us" links, and promotional Q-Zone
- 🖼️ **Q-Zone Media Gallery** with themed images
- 🧪 **Loading Spinner** while filtering category-based news
- 🔁 **Client-side Routing** using [react-router](https://www.npmjs.com/package/react-router)
- 📅 **Date Formatting** with [date-fns](https://www.npmjs.com/package/date-fns)

---

## 🛠️ Tech Stack

- ⚛️ [React](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧭 [React Router](https://www.npmjs.com/package/react-router)
- 🔁 [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)
- 📅 [date-fns](https://www.npmjs.com/package/date-fns)
- 🎨 [react-icons](https://www.npmjs.com/package/react-icons)
