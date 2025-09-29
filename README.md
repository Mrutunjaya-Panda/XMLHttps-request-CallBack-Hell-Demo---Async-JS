# XMLHttpRequest Callback Hell Demo — Async JS ⚡

This project demonstrates how asynchronous operations were traditionally handled in JavaScript using **XMLHttpRequest** and **callbacks**.  
It also highlights the challenges (often referred to as "Callback Hell") and sets the stage for the introduction of **Promises**, which provide a cleaner and more maintainable solution.

---

## 📌 Overview

- Fetches **User Card details** from the server [dummyjson.com](https://dummyjson.com) using `XMLHttpRequest`.  
- Demonstrates **asynchronous behavior** in JavaScript.  
- Uses **callback functions** to handle async operations.  
- Shows how deeply nested callbacks can quickly become unreadable and error-prone.

---

## 🗂 Project Structure

XMLHttps-request-CallBack-Hell-Demo---Async-JS/
├── index.html
├── script.js
└── README.md

- **index.html** → Basic UI for rendering data  
- **script2.js** → XMLHttpRequest logic with callbacks  
- **README.md** → Documentation  

---

## 🚀 Running the Project

1. Clone the repo:

   ```bash
   git clone https://github.com/Mrutunjaya-Panda/XMLHttps-request-CallBack-Hell-Demo---Async-JS.git
   cd XMLHttps-request-CallBack-Hell-Demo---Async-JS
2. Open index.html in a browser.

3. The script will make an API call to dummyjson.com
 to fetch and display User Card details.

## ⚡ How Callbacks Help

In JavaScript, operations like network requests are asynchronous (non-blocking).

Callbacks allow us to specify what should happen after an async task (like fetching user data) is completed.

Without callbacks, the code would execute synchronously, blocking the program until the request is finished.

## ❌ Demerits of XMLHttpRequest + Callbacks

**Callback Hell**

When multiple async calls depend on each other, callbacks get nested within callbacks, making code hard to read and maintain.

**Error Handling Issues**

Managing errors across multiple callback levels is messy and inconsistent.

**Inflexibility**

XMLHttpRequest is verbose and outdated compared to modern APIs.

**Readability**

Code indentation grows rapidly with nested callbacks, reducing clarity.

# ✅ What’s Next — Promises

To overcome these issues, Promises were introduced in JavaScript (ES6).
They provide:

Cleaner syntax

Better error handling

Easier chaining of asynchronous operations

**👉 The next part of this project will demonstrate how the same functionality can be implemented using Promises, making the code more elegant and easier to maintain.**
