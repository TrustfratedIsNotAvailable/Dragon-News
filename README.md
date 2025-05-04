# 📰 React News Portal

A modern, responsive news portal built with **React**, **Tailwind CSS**, and **React Router**, showcasing categorized news, real-time updates, and social integration features.

---

## 🔧 Features

- 📌 **Dynamic Category Filtering**
  - Load news by category ID using URL params (`/category/:id`)
  - `ID 0`: Displays **all news**
  - `ID 1`: Displays **today's picks**
- 📰 **Reusable `NewsCard` Component**
  - Displays image, title, author, date, views, and rating
- 🚀 **Live Scrolling Headlines**
  - Integrated via [`react-fast-marquee`](https://www.npmjs.com/package/react-fast-marquee)
- 🧭 **Left & Right Sidebars**
  - **Left**: Category list (fetched from `/categories.json`)
  - **Right**: Social login, "Find Us" links, and Q-Zone promotional media
- 🖼️ **Q-Zone Media Gallery**
  - Themed promotional images
- 🧪 **Loading Spinner**
  - Shows while filtering news by category
- 🔁 **Client-side Routing**
  - Handled by [`react-router`](https://www.npmjs.com/package/react-router)
- 📅 **Date Formatting**
  - Managed with [`date-fns`](https://www.npmjs.com/package/date-fns)

---

## 🛠️ Tech Stack

- ⚛️ [React](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧭 [React Router](https://www.npmjs.com/package/react-router)
- 🔁 [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)
- 📅 [date-fns](https://www.npmjs.com/package/date-fns)
- 🎨 [react-icons](https://www.npmjs.com/package/react-icons)

---

## 🧠 Authentication State: Why Use `useState(null)`?

When using Firebase Authentication in a React app, it's important to match the structure Firebase returns for the authenticated user.

### ❌ Why Not `useState([])`?

Using `useState([])` for tracking the user state is **incorrect** for several reasons:

1. 🔄 **Mismatch with Firebase’s Return Values**  
   Firebase’s `onAuthStateChanged()` returns:
   - A **user object** when logged in  
   - Or **`null`** when no user is logged in  
   → It **never returns an array**, so initializing with `[]` is misleading.

2. 🤯 **Semantics Matter**  
   - `null` clearly communicates “no user is authenticated.”  
   - An empty array (`[]`) implies a list of users — which is not applicable here.

3. ⚠️ **Avoids Confusing Logic**  
   Using `null` allows clean conditional checks:
   ```js
   if (!currentUser) {
     // Show login screen
   }

---

##Firebase Project: dragon-news-b995c

###Hosting URL:
https://dragon-news-b995c.web.app

###Firebase Console:
https://console.firebase.google.com/project/dragon-news-b995c/overview
