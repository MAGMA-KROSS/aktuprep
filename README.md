# PrepAKTU 🎓

PrepAKTU is a modern, data-driven exam preparation web application tailored for B.Tech students affiliated with **Dr. A.P.J. Abdul Kalam Technical University (AKTU)**. By analyzing previous years' question papers (PYQs) and syllabus structure, PrepAKTU helps students prepare smarter, focus on high-yield topics, and optimize their study hours.

---

## ✨ Key Features

- **📊 Deep PYQ Analysis**: Statistical breakdown of the last 10 years of AKTU question papers to highlight repeating questions, unit weightage, and critical topics.
- **⚡ "One Night Before Exam" (Survival Mode)**: A hyper-focused dashboard filtering out the noise to show you the absolute top 20 must-do questions and high-probability topics for quick revision.
- **🎯 Unit Priority Matrix**: Data-driven priorities indicating which units to master first to maximize your score in minimal time.
- **📈 Marks Coverage Estimator**: A dynamic progress tracker that updates your projected score in real-time as you complete topics.
- **🎨 Dark Mode & Premium Aesthetics**: Responsive, interactive, and beautifully animated dark interface styled with custom visual themes.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Version 16+)
- **UI & Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visualizations**: [Recharts](https://recharts.org/)

---

## 📂 Project Structure

```text
aktuprep/
├── src/
│   ├── app/                      # Next.js pages & routing
│   │   ├── StartPrep/            # Subject selection & Prep setup
│   │   │   └── analysis/         # Detailed subject PYQ insights dashboard
│   │   ├── globals.css           # Tailwind CSS imports & global styles
│   │   ├── layout.js             # Root layout component
│   │   └── page.js               # Landing page with interactive dashboard preview
│   ├── Components/               # Shared React components (Navbar, etc.)
│   └── data/                     # Subject syllabus data, question banks & topic priorities
└── package.json                  # Dependencies & script configurations
```

---

## 🚀 Getting Started

To run the application locally on your machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aktuprep.git
cd aktuprep
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to explore the dashboard.

### 4. Build for Production
To build the application for production:
```bash
npm run build
npm start
```

---

## 📄 Disclaimer
PrepAKTU is an independent student-focused tool and is **not officially affiliated, associated, or endorsed** by Dr. A.P.J. Abdul Kalam Technical University (AKTU). All subject codes, syllabus configurations, and metrics are analyzed based on publicly available resource materials.

