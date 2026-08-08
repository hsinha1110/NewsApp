# 📰 News App

A modern and responsive news application built with React Native and TypeScript.

The app allows users to browse the latest news, explore different categories, search for articles, and read complete news details through a clean and user-friendly mobile interface.

## 📱 App Demo

https://github.com/user-attachments/assets/97767642-7743-49b0-aaf7-53537be9a54e

## ✨ Features

- 📰 Latest news
- 🔥 Trending news
- 🔍 Search news articles
- 🏷️ Browse news by categories
- 📄 News article details
- 🖼️ Article images
- 📝 Article descriptions
- 🕒 Published date and time
- 🌐 Open full article
- 🔄 Pull to refresh
- ⏳ Loading states
- ❌ Error handling
- 📱 Responsive React Native UI
- 🌙 Dark mode
- 🔔 Notification settings

---

## 🛠️ Tech Stack

- React Native
- TypeScript
- React Navigation
- Axios
- REST API
- React Native Heroicons
- React Native Safe Area Context
- React Native Blur
- React Hooks

---

## 🌐 API

The application uses a REST API to fetch dynamic news data.

The API provides:

- Latest news
- News categories
- Article titles
- Article descriptions
- Article images
- Published dates
- Article URLs
- News sources

---

## 📂 Project Structure

NewsApp/
│
├── src/
│   ├── api/
│   │   └── newsService.ts
│   │
│   ├── components/
│   │
│   ├── constants/
│   │
│   ├── navigations/
│   │   ├── MainStack.tsx
│   │   ├── Routes.ts
│   │   └── types.ts
│   │
│   ├── screens/
│   │   ├── Home/
│   │   ├── NewsDetails/
│   │   ├── Search/
│   │   └── Settings/
│   │
│   └── ...
│
├── android/
├── ios/
├── App.tsx
├── package.json
└── README.md
