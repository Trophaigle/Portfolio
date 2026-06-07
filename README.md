
# 🌐 Personal Website

A modern personal website built with **Next.js** and **Tailwind CSS**, designed to showcase my projects, ideas, values, and resources in a clean and structured way.

---

## 🚀 Overview

This website serves as a central hub to present:
- My personal and professional projects
- My values and principles through an **About page**
- Curated learning resources (videos, TED talks, articles, etc.)
- Contact functionality via a REST API

The goal is to combine **clean design, performance, and meaningful content** in a modular and scalable architecture.

---

## 🛠️ Tech Stack

- **Framework:** Next.js  
- **Styling:** Tailwind CSS  
- **Internationalization:** next-intl (i18n support)  
- **Data Management:** JSON / TypeScript-based structured content  
- **Architecture:** Component-based design  
- **Backend:** REST API (contact form / email system)

---

## 🌍 Key Features

### 🌐 Multilingual Support
The website uses **next-intl** to provide a fully internationalized experience with dynamic language switching.

---

### 🧱 Modular Architecture
- Fully component-based structure
- Reusable UI components
- Clean separation between content and logic

---

### 📦 Data-Driven Content
Most content is stored using:
- JSON files
- TypeScript modules

This allows easy updates without touching core logic.

---

### 📬 Contact System (REST API)
A custom REST API handles the contact form:
- Secure message handling
- Email sending functionality
- Clear separation between frontend and backend logic

---

### 🧭 About Page
A dedicated section where I express:
- My values and beliefs
- My approach to software development
- Principles I aim to follow in my daily work

---

### 📚 Resources Section
A curated collection of:
- Educational videos
- TED Talks
- Articles
- Learning materials

Focused on continuous learning and curiosity.

---

### 💼 Projects Showcase
Includes links to:
- Personal projects
- Academic work
- Freelance / professional projects

---

## 🧠 Design Philosophy

This project is built around:
- Simplicity and clarity
- Fast performance
- Maintainable architecture
- Content-driven design rather than visual overload

---

## 📁 Project Structure

```bash
/components   → UI components
/app or /pages → Next.js routing
/data         → JSON / TS content
/i18n         → translations (next-intl)
/api          → REST API routes (contact system)
