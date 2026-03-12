# Tubing Calculator

A lightweight, browser-based production tool for calculating silicone tubing requirements across multiple assembly types. No installation required — runs entirely in the browser as a single HTML file.

---

## Features

### 2L Fraction Bottle Tab
- Fixed cut reference table with raw measurements, ceiling-rounded values, and mm equivalents
- At-a-glance scale cards for 1 unit, 1 set (3 bottles), and daily target (30 bottles)
- Production Planner — calculate total tubing needed by bottle count or set count
- Inventory Calculator — enter available tubing in cm, mm, ft, or inches to determine yield, excess remaining, and shortfall to next unit
- Unit Converter — feet to centimeters and cm-to-mm tube breakdown

### Custom Calculator Tab
- Define any assembly with a custom label, set size, and daily target
- Add unlimited tube types, each with a label, raw length (cm), and quantity per assembly
- Subtotals auto-calculate live as you type (ceiling-rounded cut × qty)
- Full reference table, scale cards, production planner, inventory calculator, and unit converter — all driven by your custom inputs
- **Reset button** — clears all fields and returns to default state in one click

### Print
- Print button in the top navigation bar
- Prints the currently active tab only
- Dark theme automatically converts to a clean white print layout
- Includes a print header with tab name and timestamp for record-keeping
- Input forms are hidden; only data and results are printed

---

## Rounding Method

All tube lengths are rounded **up to the nearest whole centimeter (ceiling)** before any calculations are performed. This ensures cut lengths are never under-measured.

| Raw (cm) | Rounded ↑ (cm) | mm  |
|----------|----------------|-----|
| 7.62     | 8              | 80  |
| 20.32    | 21             | 210 |
| 27.94    | 28             | 280 |

---

## Usage

### Option A — GitHub Pages (recommended)
1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Access the tool at `https://yourusername.github.io/repo-name/`

> **Tip:** Rename `tubing-calculator.html` to `index.html` so it loads automatically at the root URL without needing the filename in the link.

### Option B — Run locally
Download `tubing-calculator.html` and open it directly in any modern browser. No server or internet connection required after the initial font load.

---

## File Structure

```
/
├── tubing-calculator.html   # Main application (self-contained)
└── README.md                # This file
```

---

## Browser Compatibility

Tested and supported in:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Notes

- All calculations are performed client-side — no data is sent to any server
- No frameworks, build tools, or dependencies required
- Fonts are loaded from Google Fonts (requires internet connection for first load; falls back to system fonts if offline)

---

## License

This tool is for **internal use only**. Redistribution or public deployment outside of authorized channels is not permitted.
