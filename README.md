# LinguaLearn - Language School Platform

A modern web application for a language school, combining a learning platform and an e-commerce shop. This project is built with an emphasis on scalability, component-based architecture, and modern front-end development practices.

## Tech Stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Routing:** Vue Router
- **State Management:** Pinia
- **Database & Authentication:** Firebase (Auth, Firestore)
- **Internationalization:** Vue I18n (🇺🇦 UK, 🇬🇧 EN, 🇩🇪 DE)
- **Build Tool:** Vite

## Key Features (in progress)

- [x] **Routing:** Dynamic routing using `vue-router`.
- [x] **Reactivity:** Utilizing `ref` and `reactive` for state and form management.
- [x] **i18n:** Multi-language interface.
- [x] **Global State:** State management (authorization, shopping cart, courses) via Pinia.
- [ ] **Components & Slots:** Reusable UI components (cards, modals) using `<slot>`.
- [ ] **Firebase Auth:** User registration and login with role-based access (Student / Admin).
- [ ] **Firestore:** Database for enrollments, course catalog, and shop inventory.
- [ ] **Recommendation System:** Tracking user interactions (via `watch`) for personalized suggestions.

---

## Project Structure

- `/src/components` — Isolated Vue components (Layout, Home, Contact, etc.).
- `/src/views` — Main application pages assembled from components.
- `/src/stores` — Global Pinia stores (Auth, Courses, Shop).
- `/src/router` — Routing configuration.
- `/src/locales` — JSON files containing translations.

---

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

Environment Variables
Before running the project, set up your environment variables:
  1. Add your .env file.
  2. Insert your Firebase configuration keys into the .env file.

```sh
npm run dev
npm run build
```
