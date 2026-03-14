# Tubing Calculator

**Internal Production Tool** &nbsp;|&nbsp; Developed by Tinale Bradley

A browser-based calculator for determining silicone tubing requirements across production assemblies. No installation, login, or internet connection required after the initial page load.

---

## Accessing the Tool

Open the following link in any web browser:

**https://tinaleb.github.io/tubing-calculator/**

The tool works on desktop, tablet, and mobile devices. For the best experience on mobile, use landscape orientation when viewing reference tables.

---

## Tabs Overview

The calculator is organized into four tabs, each covering a specific assembly type.

### 2L Fraction Bottle
Calculates tubing requirements for the 2L Fraction Bottle assembly using 0.250" ID × 0.500" OD Silicone Tubing. All three cuts come from a single roll.

- 1 set = 3 bottles
- Daily target = 30 bottles
- Total tubing per unit = 57 cm

### Needle Bank
Calculates tubing requirements for the Needle Bank assembly using 0.104" ID × 0.192" OD Silicone Tubing. All three cuts come from a single roll.

- 1 set = 1 needle bank
- Daily target = 12 needle banks
- Total tubing per unit = 302 cm

### Canister
Calculates tubing requirements for the Canister assembly. This assembly uses **three different tube specifications**, each from a separate roll:

| Tube | Spec | Cut Length |
|------|------|------------|
| T1 | 0.500" ID × 0.750" OD | 61 cm |
| T2 | 0.375" ID × 0.625" OD | 8 cm |
| T3 | 0.250" ID × 0.500" OD | 8 cm |

- Daily target is selectable: **4 or 8 canisters**
- Each tube type has its own inventory section
- A **Limiting Factor Summary** automatically identifies which tube type will run out first

### Custom Calculator
For assemblies not covered by the fixed tabs. Enter your own label, set size, daily target, and tube definitions. The tool generates a full reference table, scale cards, and all calculators based on your inputs.

---

## How to Use Each Section

### Tube Cut Reference
Displays the required cut lengths per unit in cm, mm, and inches. Use this as your cut guide before production.

### Production Planner
Enter the number of units or sets you need to produce. The planner returns total tubing required per tube type with a full breakdown.

### Inventory Calculator
Enter the length of tubing you have available (in cm, mm, ft, or inches). The calculator returns:
- How many complete units can be produced
- How many complete sets that represents
- Excess tubing remaining
- Whether inventory meets the daily target

### Unit Converter
Convert any measurement between feet, centimeters, millimeters, and inches. All four equivalents are displayed at once. Use the **✕ Zero** button to clear the input and start over.

The **Tube Breakdown** converter (right side) shows how a given cm value distributes across the tube cuts for that assembly.

---

## Rounding

All cut lengths are rounded **up to the nearest whole centimeter** (ceiling rounding). This ensures no cut is ever under-measured.

| Raw (cm) | Used (cm) | mm | in |
|---|---|---|---|
| 7.62 | 8 | 80 | 3.15" |
| 9.525 | 10 | 100 | 3.94" |
| 60.96 | 61 | 610 | 24.02" |

---

## Printing

Click the **Print** button in the top navigation bar to print the currently active tab. The printed output includes:
- Tab name and timestamp
- Tube cut reference table
- Scale cards
- Any planner, inventory, or converter results that were calculated before printing

Input fields are hidden on the printed page. Only results are shown.

---

## Notes

- All calculations run locally in the browser — no data is submitted or stored anywhere
- The tool does not require an account or login
- Refreshing the page resets all inputs to their default state
- The Custom Calculator **Reset** button clears all fields and returns to three blank tube rows

---

*For questions or updates, contact Tinale Bradley.*
