# LinguaLearn - Language School Platform

🌍 **Live Demo:** [https://language-school-71338.web.app/](https://language-school-71338.web.app/)

A modern web application for a language school, combining a learning platform and an e-commerce shop. This project is built with an emphasis on scalability, component-based architecture, and modern front-end development practices.

## Tech Stack

- **Framework:** Vue 3 (Composition API, `<script setup>`)
- **Routing:** Vue Router
- **State Management:** Pinia
- **Database & Authentication:** Firebase (Auth, Firestore)
- **Internationalization:** Vue I18n (🇺🇦 UK, 🇬🇧 EN, 🇩🇪 DE, 🇰🇷 KO)
- **Build Tool:** Vite

## Key Features

- [x] **Routing:** Dynamic routing using `vue-router`.
- [x] **Reactivity:** Utilizing `ref` and `reactive` for state and form management.
- [x] **i18n:** Multi-language interface.
- [x] **Global State:** State management (authorization, shopping cart, courses) via Pinia.
- [x] **Components & Slots:** Reusable UI components (cards, navigation) using `<slot>`.
- [x] **Firebase Auth:** User registration and login (Email/Password & Google) with role-based access (User / Admin).
- [x] **Firestore:** Database for enrollments, merchandise orders, and course requests.

---

## Project Structure

- `/src/components` — Isolated Vue components (Layout, Home, Contact, etc.).
- `/src/views` — Main application pages assembled from components.
- `/src/stores` — Global Pinia stores (Auth, Cart, Shop).
- `/src/router` — Routing configuration.
- `/src/locales` — JSON files containing translations.
- `/src/firebase` — Firebase configuration and database initialization.
- `/src/helpers` — Utility functions and database operation wrappers.

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

---

## Project Setup

```sh
npm install
