# 🔍 AlgoScope

> **A smart DSA code analysis tool that evaluates your logic and estimates Big-O complexity using a lightweight machine learning text pipeline.**

![Python](https://img.shields.io/badge/Python-3.10+-blue?style=flat-square&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.x-lightgrey?style=flat-square&logo=flask)
![scikit-learn](https://img.shields.io/badge/scikit--learn-ML-orange?style=flat-square&logo=scikit-learn)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🎯 What is AlgoScope?

AlgoScope is a web-based tool where you paste any Python or pseudocode snippet and instantly receive:

- 🏷️ **Big-O Complexity Badge** — Time & Space complexity, color-coded by severity
- 📈 **Growth Curve Graph** — Visual comparison of all Big-O curves with yours highlighted
- 🔍 **Code Review** — Specific observations about loops, recursion, and data structures
- 💡 **Optimization Suggestions** — Actionable tips to improve your algorithm's performance

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Complexity Estimation** | Detects O(1), O(log n), O(n), O(n log n), O(n²), O(n³), O(2^n) |
| **ML Text Pipeline** | CountVectorizer + Logistic Regression on code tokens |
| **Rule-Based Heuristics** | Loop depth, recursion detection, sort/hashmap usage |
| **Growth Curve Chart** | Interactive Chart.js graph — all curves vs yours |
| **Code Review Section** | Auto-generated review with pattern-matched feedback |
| **Suggestions Engine** | Curated optimization tips per detected pattern |

---

## 🛠️ Tech Stack

- **Backend:** Python 3.10+, Flask
- **ML:** scikit-learn (CountVectorizer, Logistic Regression)
- **Frontend:** HTML5, CSS3 (vanilla), JavaScript
- **Charts:** Chart.js (CDN, no install needed)
- **Deployment:** Render / Railway (free tier)

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/algoscope.git
cd algoscope
```

### 2. Create and activate a virtual environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the app
```bash
python app.py
```

### 5. Open in browser
```
http://127.0.0.1:5000
```

---

## 📁 Project Structure

```
algoscope/
├── app.py                      # Flask routes & core logic
├── requirements.txt            # Python dependencies
├── Procfile                    # Deployment config (Render/Railway)
├── README.md
├── ml/
│   ├── analyzer.py             # Big-O detection pipeline (ML + rules)
│   └── suggestions.py          # Review & suggestions engine
├── static/
│   ├── css/
│   │   └── style.css           # Dark theme, animations
│   └── js/
│       └── main.js             # Chart.js graph, copy button, spinner
└── templates/
    ├── base.html               # Shared layout + nav
    ├── index.html              # Landing page + code input
    └── result.html             # Analysis results page
```

---

## 🧠 How the ML Pipeline Works

```
User Code Input
      │
      ▼
Feature Extraction
 ├── Loop depth counter
 ├── Recursion keyword detector
 ├── Sort / binary search patterns
 └── Hash map / set usage
      │
      ▼
Rule-Based Classifier  ──────────────▶  Primary Estimate
      │
      ▼
CountVectorizer (code tokens)
      │
      ▼
Logistic Regression  ─────────────────▶  Confidence Score
      │
      ▼
Final Big-O + Review + Suggestions
```

---

## 📊 Big-O Badge Color System

| Complexity | Color | Label |
|------------|-------|-------|
| O(1) | 🟢 Green | Excellent |
| O(log n) | 🔵 Blue | Great |
| O(n) | 🟡 Yellow | Good |
| O(n log n) | 🟠 Orange | Acceptable |
| O(n²) | 🔴 Red | Needs Work |
| O(2^n) | 🟣 Purple | Critical |

---

## ☁️ Deployment (Render)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
5. Deploy — your app will be live at `https://algoscope.onrender.com`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT License © 2024 AlgoScope
