# ⚡ My-Cal Frontend (React + Vite + TailwindCSS)

A modern, responsive frontend built with **React (Vite)** and styled using **Tailwind CSS**.
This app connects with the backend (developed by **Ishan Sanjay**) to provide calculator features with API integration.

---

## 📝 Description

* 📌 **Purpose:** Frontend interface for calculator application.
* 🔗 **Backend:** Built with Spring Boot ishan sanjaya.
* 🛠 **Technologies Used:** React ⚛️, Vite ⚡, TailwindCSS 🎨, Axios 🌐, React Router 🚦

---

## ✨ Features

* 🎨 Responsive UI with TailwindCSS
* 🔗 API Integration with backend
* 🔒 Authentication & Authorization (if implemented)
* ⚡ Fast Refresh (HMR) with Vite
* 🛑 Error handling & validation

---

## ⚙️ Installation / Setup

### ✅ Prerequisites

* Node.js (v18+)
* npm / yarn

### 🚀 Steps

```bash
# Clone the repo
git clone https://github.com/your-username/my-cal-frontend.git
cd my-cal-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend will be available at: 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔍 Usage

* Start the app:

  ```bash
  npm run dev
  ```
* Example flow:

  * User inputs values ➡️ frontend calls backend API (`http://localhost:8081/api/calculator`) ➡️ result displayed on UI

---

## 📂 Project Structure

```
my-cal-frontend/
│── public/            # Static assets
│── src/
│   ├── assets/        # Images, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components (Home, Login, Calculator)
│   ├── services/      # Axios API calls
│   ├── styles/        # Tailwind / global CSS
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
│── tailwind.config.js # Tailwind configuration
│── package.json
│── vite.config.js
```

---

## 🛠 React + Vite Notes

This template provides a minimal setup to get **React working in Vite** with HMR and ESLint rules.

Currently, two official plugins are available:

* 🔹 `@vitejs/plugin-react` → uses Babel for Fast Refresh
* 🔹 `@vitejs/plugin-react-swc` → uses SWC for Fast Refresh (faster builds 🚀)

👉 If developing for **production**, use **TypeScript** with type-aware ESLint rules.
Check out the [TS template](https://vitejs.dev/guide/) to integrate **TypeScript** & `typescript-eslint`.

---

## 🛤 Roadmap / Future Improvements

* 🔐 Add authentication (login/signup UI)
* ☁️ Deploy frontend (Vercel / Netlify)
* 🧪 Add testing (Jest, React Testing Library)
* 🎭 Improve UI/UX with animations (Framer Motion)



---

## 👥 Authors

* 🎨 **Frontend:** *thushani wanigasinghe*
* ⚙️ **Backend:** *Ishan Sanjay*

---

