# 🤖 Chatbot Project (React + Vite)

A modern, interactive chatbot web application built with **React** and **Vite**.  
This project demonstrates real‑time user-to-chatbot communication with a clean, conversation‑focused UI.

---

## 📌 Overview

This app provides an interactive chat interface where users can send messages to a chatbot and receive intelligent responses asynchronously. It’s designed as a **learning and demonstration project** showcasing modern React patterns, component-based architecture, and smooth UI interactions.

---

## 🛠 Tech Stack

- **Frontend:** React 18.3.1
- **Rendering:** React DOM
- **Build Tool:** Vite 6.0.1
- **Chatbot Engine:** `supersimpledev` (v8.6.4)
- **Date & Time:** Day.js 1.11.20
- **Language:** JSX
- **Code Quality:** ESLint (React rules)

---

## 🧩 Application Architecture

The application follows a clear component-based structure.

### 1. App (`App.jsx`)
- Root component
- Manages the global `chatMessages` state
- Initializes chatbot responses via `Chatbot.addResponses()`
- Displays an intro message when no messages exist
- Uses a custom `useAutoScroll` hook to keep the chat scrolled to the latest message

**Predefined bot responses:**
- `goodbye` → `Goodbye. Have a great day!`
- `i love you!` → `I love you too!`
- `time` → Current local time (12‑hour format)

---

### 2. ChatInput (`ChatInput.jsx`)
- Handles user input and sending messages
- Supports Enter key and Send button
- Includes a Clear Chat button
- Prevents empty messages and duplicate submissions
- Shows a loading spinner while waiting for chatbot responses
- Uses Day.js for message timestamps
- Generates unique IDs with `crypto.randomUUID()`

---

### 3. ChatMessages (`ChatMessages.jsx`)
- Displays the full conversation
- Maps over `chatMessages` and renders `ChatMessage` components
- Integrates auto‑scroll behavior with `useAutoScroll`

---

### 4. ChatMessage (`ChatMessage.jsx`)
- Renders individual chat bubbles
- Conditional layout based on sender:
  - **User messages**: Right-aligned with user avatar
  - **Robot messages**: Left-aligned with robot avatar
- Displays message content and timestamp

---

## 🎨 Styling

- Responsive layout with **600px max-width**
- Full viewport height chat container (`100vh`)
- Flexbox-based layout
- Modular CSS files per component:
  - `App.css`
  - `ChatInput.css`
  - `ChatMessages.css`
  - `ChatMessage.css`
  - `index.css`

---

## ✨ Features

- Real‑time async messaging
- Loading spinner while chatbot responds
- Automatic scrolling to newest message
- Predefined and extensible chatbot responses
- Message timestamps
- Clear distinction between user and chatbot messages
- Session‑based conversation history
- Clear chat functionality
- Keyboard support (Enter key)
- Input validation

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
