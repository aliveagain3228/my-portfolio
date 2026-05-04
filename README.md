# 💼 Personal Portfolio — Nikita Koida

![GitHub Repo Size](https://img.shields.io/github/repo-size/aliveagain3228/ForWork?style=flat-square)
![GitHub License](https://img.shields.io/github/license/aliveagain3228/ForWork?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

> Современное портфолио Frontend-разработчика с фокусом на Bento-дизайн, плавные анимации и безупречную производительность.

---

## 🌟 О проекте
Проект создан для демонстрации навыков в разработке интерфейсов. Основной упор сделан на эстетику **Bento Grid** (в стиле Apple/Vercel) и высокую скорость работы благодаря сборщику Vite.

### ✨ Ключевые фишки:
*   **Bento Grid Layout** — адаптивная плиточная сетка, вдохновленная современными интерфейсами iOS/macOS. 
*   **GSAP & Framer Motion** — продвинутые анимации появления элементов и плавных переходов между секциями.
*   **Theme Switcher** — поддержка темной и светлой тем с автоматическим сохранением выбора в `localStorage`.
*   **TypeWriter Effect** — динамическая смена текста в Hero-секции для привлечения внимания.
*   **SEO & Accessibility** — семантическая верстка и использование ARIA-атрибутов для доступности.

---

## 🛠️ Технологический стек

### Frontend
* **React (v18+)** — UI библиотека для создания реактивных интерфейсов.
* **JavaScript (ES6+)** — основная логика и манипуляция данными.
* **SCSS/Sass** — модульная архитектура стилей с использованием переменных и миксинов[cite: 3].
* **Tailwind CSS** — для быстрой и гибкой верстки отдельных компонентов.
* **React Icons** — библиотека иконок (Simple Icons).

### Инструменты
* **Vite** — сверхбыстрый инструмент сборки и сервер для разработки.
* **GSAP** — библиотека для сложных таймлайн-анимаций.
* **GitHub Actions** — автоматизация деплоя на GitHub Pages.

---

## 📂 Структура проекта

```bash
portfolio/
├── src/
│   ├── assets/          # Изображения, иконки и шрифты
│   ├── components/      # UI-компоненты (BentoCard, Loader, TypeWriter)
│   ├── sections/        # Основные блоки страницы (Header, Hero, Projects)
│   ├── styles/          # SCSS стили (_variables, _base, _grid)[cite: 3]
│   ├── constants/       # Контент проекта (тексты, ссылки, данные)
│   └── App.jsx          # Главный логический компонент
└── public/              # Статические файлы (favicon, роботы)
