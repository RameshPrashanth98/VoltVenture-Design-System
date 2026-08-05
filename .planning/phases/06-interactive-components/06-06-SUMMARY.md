# 06-06 SUMMARY — Bottom-pinned: TabBar, BottomCard

**Status:** COMPLETE (2026-08-05)
**Wave:** 3

## What was done

### TabBar
- makePhoneFrame() + Interactive inserted AFTER existing helpers (hexToRgba, shadowFromToken, TABS, tabBar) and BEFORE first export (RideActive)
- Interactive uses `INTERACTIVE_TABS = ['Home', 'Ride', 'Rewards', 'Profile']` (UI-SPEC labels — RESEARCH.md A1 superseded)
- `let activeTab = 'Ride'` initial state
- Tab bar container: `position:absolute; bottom:0; left:0; right:0` — pinned to bottom
- screen div has `position:relative` (from makePhoneFrame spec) — prerequisite for absolute positioning
- tabRefs structure: each entry holds { label, indicator, labelEl, tabDiv }
- Click handlers loop tabRefs, mutate .style.background and .style.color (no innerHTML rebuild)
- hexToRgba and shadowFromToken reused (no duplicates)

### BottomCard
- makePhoneFrame() + Interactive inserted AFTER existing helpers (hexToRgba, shadowFromToken) and BEFORE first export (BikeSelection)
- `let expanded = false` state variable
- Card: `position:absolute; bottom:0; left:0; right:0; height:120px; transition:height 300ms ease; overflow:hidden`
- Drag handle click → `card.style.height = expanded ? '320px' : '120px'`
- Card body uses innerHTML (safe — only handle has listener)
- hexToRgba and shadowFromToken reused (no duplicates)

## Verification
- Both: Interactive is first named export
- TabBar: `'Home'` in INTERACTIVE_TABS (×1), bottom:0 (×2 — container + plan comment), position:absolute
- BottomCard: `let expanded` (×1), 120px + 320px both present (×2), 1 listener on handle
