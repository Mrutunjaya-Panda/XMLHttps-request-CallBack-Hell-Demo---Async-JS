# Async JavaScript – Promise-based Fetch Demo

This branch (`promise-branch`) demonstrates how to replace **XMLHttpRequest** with the modern **Promise-based `fetch` API** to avoid **callback hell**.

---

## 🔴 Problem with XMLHttpRequest (main branch)
- The `main` branch shows data fetching using **XMLHttpRequest**.  
- While it works, it often leads to **nested callbacks** (callback hell).  
- Hard to read, debug, and maintain.

---

## ✅ Solution in this Branch
- This `promise-branch` uses the **`fetch` API** which returns a **Promise**.  
- Advantages:
  - Cleaner, more readable code.
  - No deeply nested callbacks.
  - Built-in JSON handling with `.json()`.
  - Easier error handling with `.catch()`.
  - Compatible with modern **async/await** syntax.

---

## 📂 Files in This Branch
- `index.html` → Demo page.
- `script.js` → Promise-based `fetch` implementation.
- `style.css` → (if present) styling.

---

## 🚀 How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Mrutunjaya-Panda/xmlhttprequest-vs-fetch-demo.git
   cd xmlhttprequest-vs-fetch-demo
2. Switch to the promise-branch:
   ```
   git checkout promise-branch
3. Open index.html in your browser.

### 📌 Summary

**This branch demonstrates how moving from callbacks to Promises makes asynchronous JavaScript code:**

# Easier to read
# Easier to maintain
# More future-proof, ready for async/await.
