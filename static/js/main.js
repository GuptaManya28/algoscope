// ============================
//   AlgoScope — main.js
// ============================

// --- Loading spinner on form submit ---
const form = document.getElementById("analyze-form");
if (form) {
  form.addEventListener("submit", () => {
    const btn = document.getElementById("analyze-btn");
    const txt = btn.querySelector(".btn-text");
    const spin = document.getElementById("spinner");
    if (txt && spin) {
      txt.classList.add("hidden");
      spin.classList.remove("hidden");
      btn.disabled = true;
    }
  });
}

// --- Example code buttons ---
document.querySelectorAll(".btn-example").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.dataset.code.replace(/\\n/g, "\n");
    const ta = document.getElementById("code-input");
    if (ta) ta.value = code;
  });
});

// --- Copy code button ---
function copyCode() {
  const code = document.getElementById("submitted-code");
  if (!code) return;
  navigator.clipboard.writeText(code.innerText).then(() => {
    const btn = document.querySelector(".btn-copy");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1800);
    }
  });
}

// ============================
//   Growth Curve Chart
// ============================
function initGrowthChart(detected) {
  const canvas = document.getElementById("growthChart");
  if (!canvas) return;

  const N = Array.from({ length: 30 }, (_, i) => i + 1); // n = 1..30

  const curves = [
    { label: "O(1)",      key: "O(1)",      data: N.map(() => 1),                          color: "#22c55e" },
    { label: "O(log n)",  key: "O(log n)",  data: N.map((n) => Math.log2(n)),              color: "#3b82f6" },
    { label: "O(n)",      key: "O(n)",      data: N.map((n) => n),                         color: "#eab308" },
    { label: "O(n log n)",key: "O(n log n)",data: N.map((n) => n * Math.log2(n)),          color: "#f97316" },
    { label: "O(n²)",     key: "O(n²)",     data: N.map((n) => n * n),                     color: "#ef4444" },
    { label: "O(2^n)",    key: "O(2^n)",    data: N.map((n) => Math.min(Math.pow(2, n), 1e9)), color: "#a855f7" },
  ];

  // Normalize detected key (handle Unicode superscripts from Flask)
  const normalizeKey = (s) =>
    s.replace("O(n^2)", "O(n²)").replace("O(2^n)", "O(2^n)").trim();
  const detectedKey = normalizeKey(detected);

  const datasets = curves.map((c) => {
    const isDetected = c.key === detectedKey;
    return {
      label: c.label,
      data: c.data,
      borderColor: c.color,
      backgroundColor: isDetected ? c.color + "22" : "transparent",
      borderWidth: isDetected ? 3 : 1.5,
      pointRadius: isDetected ? 4 : 2,
      tension: 0.35,
      borderDash: isDetected ? [] : [4, 3],
      order: isDetected ? 0 : 1,
    };
  });

  new Chart(canvas, {
    type: "line",
    data: { labels: N, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      scales: {
        x: {
          title: { display: true, text: "Input Size (n)", color: "#6b6b8a" },
          ticks: { color: "#6b6b8a" },
          grid:  { color: "#1e1e35" },
        },
        y: {
          type: "logarithmic",
          title: { display: true, text: "Operations (log scale)", color: "#6b6b8a" },
          ticks: { color: "#6b6b8a" },
          grid:  { color: "#1e1e35" },
          min: 1,
        },
      },
      plugins: {
        legend: {
          labels: { color: "#e2e2f0", font: { family: "Inter" }, boxWidth: 14, padding: 14 },
        },
        tooltip: {
          backgroundColor: "#13131f",
          borderColor: "#1e1e35",
          borderWidth: 1,
          titleColor: "#e2e2f0",
          bodyColor: "#6b6b8a",
        },
      },
    },
  });
}
