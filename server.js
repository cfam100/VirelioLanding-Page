const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;
const CONTACTS_FILE = path.join(__dirname, "contacts.json");

// Parse JSON bodies
app.use(express.json());

// Serve static files (index.html, css, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// ─── Contact form API ─────────────────────────────────────────────────────────

app.post("/api/contact", (req, res) => {
  const { name, email, business, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, detail: "Vul alle verplichte velden in." });
  }

  const entry = {
    name,
    email,
    business: business || "",
    phone: phone || "",
    message,
    submitted_at: new Date().toISOString(),
  };

  // Read existing contacts
  let contacts = [];
  try {
    if (fs.existsSync(CONTACTS_FILE)) {
      contacts = JSON.parse(fs.readFileSync(CONTACTS_FILE, "utf-8"));
    }
  } catch {
    contacts = [];
  }

  // Append and save
  contacts.push(entry);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2), "utf-8");

  console.log(`[CONTACT] ${name} <${email}> — ${business || "geen bedrijf"}`);

  return res.json({ ok: true, message: "Bedankt! We nemen zo snel mogelijk contact op." });
});

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
