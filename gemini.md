# ⚖️ Project Law & Schemas (gemini.md)

## 📊 Data Schema
> [!IMPORTANT]
> The JSON input/output schemas will be defined here once discovery is complete.
> **No tools in `tools/` may be coded until this schema is confirmed.**

### 📥 Input Schema
```json
{}
```

### 📤 Output (Payload) Schema
```json
{}
```

---

## 🛑 Behavioral Rules
1. **Rule 1:** Prioritize reliability and predictability. Do not guess business rules.
2. **Rule 2:** All intermediate scraping, extraction, or file actions must occur inside `.tmp/`.
3. **Rule 3:** Environmental credentials must reside in `.env`. Do not commit keys.

---

## 🪵 Maintenance & Evolution Log
*This log tracks the history of architectural updates and structural learnings.*

- **2026-05-18:** Project memory initialized. Protocol 0 established.
