# Tubing Calculator

**Internal Production Tool**

A browser-based calculator for determining silicone tubing requirements across production assemblies. No installation, login, or internet connection required after the initial page load.

---

## Accessing the Tool

Open the bookmarked link in any web browser. The tool works on desktop, tablet, and mobile devices.

For the best experience on mobile, use landscape orientation when viewing reference tables.

---

## Offline Use

This tool is a Progressive Web App (PWA). After the first visit with an internet connection, the app is automatically saved to your device. All tabs and calculations will continue to work even if the network is unavailable.

**To enable offline use:** Simply visit the link once while connected. No extra steps required.

**Add to Home Screen:** On tablets and phones, you can add the tool to your home screen for quick access. It will open full screen without a browser bar.
- **Android (Chrome):** Tap the menu → *Add to Home Screen*
- **iPad (Safari):** Tap the Share icon → *Add to Home Screen*

---

## Tabs Overview

| Tab | Assembly | Daily Target |
|-----|----------|-------------|
| 2L Fraction Bottle | 2L Fraction Bottle | 30 bottles / day |
| Needle Bank | Needle Bank | 12 banks / day |
| Canister | Canister | 4 or 8 / day (selectable) |
| Custom | Any assembly | User-defined |
| Calculator | General arithmetic | — |

---

## How to Use Each Section

### Tube Cut Reference
Displays required cut lengths per unit in cm, mm, and inches. Use this as your cut guide before production. Scale cards below the table show totals for common quantities at a glance.

> **Canister tab:** Three different tube specifications are used — each comes from a separate roll. Do not mix tube types.

### Production Planner
Enter the number of units or sets to produce. Results show total tubing required per tube type in cm, mm, and inches.

> **Canister tab:** Use the Daily Target toggle (4 or 8) to set your daily goal before calculating.

### Inventory Calculator
Enter the length of tubing available in cm, mm, ft, or inches. Results show complete units, complete sets, excess remaining, and whether inventory meets the daily target.

> **Canister tab:** Calculate each tube type (T1, T2, T3) separately. A Limiting Factor Summary appears automatically once two or more tube types have been calculated, identifying which tube restricts total production.

### Unit Converter
Converts any measurement between feet, centimeters, millimeters, and inches. All four equivalents display at once. The Tube Breakdown panel shows how a cm value distributes across the individual cuts for that assembly. Use the **✕ Zero** button to clear any input.

### Calculator
A general-purpose arithmetic calculator for any quick calculations needed during production. Supports addition, subtraction, multiplication, division, percentage, and sign toggle. Calculation history is displayed below the keypad and can be cleared at any time. Keyboard input is supported when using a desktop or connected keyboard.

### Print
Click the **Print** button in the top navigation bar to print the currently active tab. Input fields are hidden — only reference data and results are shown. The printed output includes the tab name and a timestamp. The Print button is not available on the Calculator tab.

---

## Rounding

All cut lengths are rounded **up to the nearest whole centimeter** (ceiling rounding). Cuts are never rounded down.

| Raw (cm) | Used (cm) | mm | in |
|---|---|---|---|
| 7.62 | 8 | 80 | 3.15" |
| 9.525 | 10 | 100 | 3.94" |
| 60.96 | 61 | 610 | 24.02" |

---

## Notes

- All calculations run locally in the browser — no data is submitted or stored anywhere
- No account or login required
- Refreshing the page resets all inputs to their default state
- The Custom Calculator **Reset** button clears all fields and returns to three blank tube rows

---

## File Structure

```
/
├── index.html        # Main application
├── sw.js             # Service worker (offline support)
├── manifest.json     # PWA configuration
├── icon-192.png      # App icon
├── icon-512.png      # App icon (large)
├── README.md         # This file
└── LICENSE           # Internal use only
```

---

*For questions or updates, contact Tinale Bradley.*
