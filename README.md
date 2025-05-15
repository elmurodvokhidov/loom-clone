# 🎥 Screen Recording & Sharing App

Welcome to the **Screen Recording & Sharing App**! 🚀
A modern web application to **record your screen**, **preview it**, and **instantly share via a link**.
Built with a minimalistic design and powered by **FFmpeg**, this app offers a seamless way to capture and share screen activity — perfect for tutorials, bug reports, and quick demos.

<div align="center">
  <img src="https://img.shields.io/github/stars/elmurodvokhidov/loom-clone?style=for-the-badge" alt="Stars">
  <img src="https://img.shields.io/github/forks/elmurodvokhidov/loom-clone?style=for-the-badge" alt="Forks">
  <img src="https://img.shields.io/github/issues/elmurodvokhidov/loom-clone?style=for-the-badge" alt="Issues">
  <img src="https://img.shields.io/github/license/elmurodvokhidov/loom-clone?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/github/last-commit/elmurodvokhidov/loom-clone?style=for-the-badge" alt="Last Commit">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge" alt="Pull Requests Welcome">
</div>

---

## 🚀 Features

* 🖥️ Record full screen or a specific tab/window
* ✂️ Trim video before uploading
* 🎬 Live preview of recorded content
* ☁️ Upload and host videos via UploadThing
* 🔗 Instantly shareable links
* 💬 Custom shareable page with video playback
* 🧱 Clean and reusable component architecture
* ⚡ Fast performance with Next.js App Router

---

## 🧰 Tech Stack

| Frontend                   | Backend           | Tools & Services   |
| -------------------------- | ----------------- | ------------------ |
| Next.js 14 (App Router) ⚛️ | Edge Functions    | UploadThing ☁️     |
| TypeScript 🟦              | FFmpeg.wasm 🎞️   | Shadcn/UI 🎨       |
| TailwindCSS 💨             | Server Actions 🧠 | React Hook Form 📝 |
| Vercel Hosting ▲           |                   | Zustand 🧠         |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/elmurodvokhidov/loom-clone.git
cd loom-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following (see `.env.example` in the repo for reference):

```env
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
```

> You’ll need an account on [UploadThing](https://uploadthing.com) to get these credentials.

### 4. Run the App Locally

```bash
npm run dev
```

---

## 🙌 Credits

Huge thanks to [Adrian Hajdin](https://github.com/adrianhajdin) for building and sharing this powerful and elegant screen recording solution.
Inspired by simplicity and functionality, this project is a testament to his focus on modern developer experiences.

---

## 📄 License

Distributed under the [MIT License](LICENSE).