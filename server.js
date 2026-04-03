const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (index.html, css, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// ─── Health check ─────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ─── Start ────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log();
  console.log("  VirelioCreator Landing Page");
  console.log(`  → http://localhost:${PORT}`);
  console.log();
});
