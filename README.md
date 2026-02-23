

# 👟 Kicks – Premium Sneaker Store

Kicks is a high-performance e-commerce platform built for sneaker enthusiasts. It features a modern, responsive design with dynamic data fetching, global state management, and an intuitive user experience from product discovery to checkout.

**🚀 [Live Demo**](https://kicks-store-eosin.vercel.app/)

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16+](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
* **Data Fetching:** [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) (Fetching from Platzi Fake Store API)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** [Embla Carousel](https://www.embla-carousel.com/)

---

## ✨ Features

### 1. Dynamic Product Exploration

* **Server-Side Rendering:** Optimized SEO and initial load speeds.
* **RTK Query Integration:** Real-time data fetching and caching for products and categories.
* **Responsive Grid:** Adaptive layouts that switch between 4-column grids (Desktop) and interactive carousels (Mobile).

### 2. Advanced Shopping Experience

* **Size-Aware Cart:** Add the same sneaker in different sizes as unique items.
* **Persistent Wishlist:** Toggle favorites across the app using a custom `useWishlist` hook.
* **Real-time Totals:** Automatic calculation of subtotal, delivery, and taxes.

### 3. Interactive UI

* **Synced Galleries:** Mobile thumbnails that control the main product view.
* **Cart Drawer/Page:** Seamless management of quantities and removals.
* **Responsive Design:** Pixel-perfect execution for mobile, tablet, and desktop.

---

## 📂 Project Structure

```text
├── src
│   ├── app            # Next.js App Router (Pages & Layouts)
│   ├── components     # Reusable UI (Button, Carousel, ProductCards)
│   ├── hooks          # Custom hooks (useCart, useWishlist)
│   ├── lib            # Global state & API logic
│   │   ├── features   # Redux Slices (cart, wishlist)
│   │   └── store.ts   # Redux Store configuration
│   └── types          # TypeScript interfaces

```

---

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/rabiulkhan7224/kicks-store.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open the app:**
Visit [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

---

## 🧪 API Integration

This project uses the **Platzi Fake Store API** for demonstration purposes.

* **Base URL:** `https://api.escuelajs.co/api/v1/`
* **Endpoints:** `/products`, `/products/:id`, `/categories`

---



