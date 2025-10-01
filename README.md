# ⚡ My-Cal Frontend (React + Vite + TailwindCSS)

A modern, **responsive calculator frontend** built with **React (Vite)** and styled using **Tailwind CSS**.
Connects seamlessly with the backend (developed by **Ishan Sanjay**) for real-time calculator functionality via API integration.

---

## 📝 Overview

* 📌 **Purpose:** Provide a sleek, interactive frontend for a calculator application.
* 🔗 **Backend:** Built with Spring Boot by **Ishan Sanjay**.
* 🛠 **Tech Stack:** React ⚛️, Vite ⚡, TailwindCSS 🎨, Axios 🌐, React Router 🚦

---

## ✨ Key Features

* 🎨 **Responsive UI** with TailwindCSS for all screen sizes.
* 🔗 **Backend API Integration** for calculator operations.
* 🔒 **Authentication & Authorization** support (if implemented).
* ⚡ **Fast Refresh (HMR)** powered by Vite for instant updates.
* 🛑 **Error Handling & Input Validation** to ensure reliability.

---

## ⚙️ Installation / Setup

### ✅ Prerequisites

* **Node.js** v18+
* **npm** or **yarn**

Frontend will be accessible at: 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔍 Usage

* Run the app:

```bash
npm run dev
```

* Example workflow:

1. User inputs numbers and operations in the UI.
2. Frontend sends a request to backend API (`http://localhost:8081/api/calculator`).
3. Response is displayed instantly on the UI.

---

## 📂 Project Structure

```
my-cal-frontend/
│── public/            # Static assets (images, icons)
│── src/
│   ├── assets/        # Images, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components (Home, Login, Calculator)
│   ├── services/      # Axios API calls
│   ├── styles/        # Tailwind / global CSS
│   ├── App.jsx        # Root component
│   └── main.jsx       # App entry point
│── tailwind.config.js # Tailwind configuration
│── package.json
│── vite.config.js
```

---

## 🛠 React + Vite Notes

This project uses **Vite** for rapid development with React:

* 🔹 `@vitejs/plugin-react` → Babel-based Fast Refresh
* 🔹 `@vitejs/plugin-react-swc` → SWC-based Fast Refresh (faster builds 🚀)

> **Pro Tip:** For production apps, consider **TypeScript** + type-aware ESLint for better maintainability.
> [Vite TS Template Guide](https://vitejs.dev/guide/)

---

## 🛤 Roadmap / Future Enhancements

* 🔐 Add full **authentication UI** (login/signup)
* ☁️ Deploy frontend to **Vercel / Netlify**
* 🧪 Add **unit and integration tests** (Jest + React Testing Library)
* 🎭 Enhance **UI/UX** with **animations** (Framer Motion)

---

## 👥 Authors

* 🎨 **Frontend:** *Thushani Wanigasinghe* — [thushanimalsha42@gmail.com](mailto:thushanimalsha42@gmail.com)
* ⚙️ **Backend:** *Ishan Sanjay* — [ishanstga@gmail.com](mailto:ishanstga@gmail.com)

---

I can also create a **more visually appealing version** with emojis, colored badges, and “pro-style” sections like *Tech Stack badges*, *Installation badges*, and *Live Demo badges*—just like professional GitHub repos.

Do you want me to do that next?
