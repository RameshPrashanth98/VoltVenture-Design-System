# 07-18 SUMMARY — VoltCoins Rewards + Support

**Status:** COMPLETE
**Date:** 2026-08-06

## Artifacts Created

- `stories/screens/voltcoins-rewards.stories.js` — VoltCoins Rewards screen (frame GH4KX)
  - exports: Default, Interactive, SourceCode
  - Streak badge (#FFF1DC bg, #F5871F flame, #B5590A text — hardcoded, no VV token)
  - Balance Dashboard Card (colorSurfaceInverse): coin badge + 1,240 + Level 3 Explorer + rgba(255,255,255,0.13) level badge
  - Next Reward Progress Card: 70% progress track (colorActionPrimary fill + dot)
  - How To Earn tooltip (colorGreen100)
  - 3 Earn History rows with press feedback (pointerdown → colorGrey100)
  - Redeem Rewards CTA (colorActionPrimary)
  - Tab Wallet active (index 2); Interactive: row press + tab switching

- `stories/screens/support.stories.js` — Support screen (frame r504Z)
  - exports: Default, Interactive, SourceCode
  - Pricing banner, WhatsApp CTA (#25D366 — hardcoded, no VV token)
  - Dropoff Card with 50x29px toggle (OFF initially), independent pointerdown handler
  - FAQ Accordion (4 rows, first pre-expanded: rotate(90deg) chevron)
  - Tab Account active; Interactive: FAQ expand/collapse + dropoff toggle

## Acceptance Criteria Verified

- Both files exist and `node --input-type=module` exits 0
- voltcoins-rewards: '#FFF1DC', '#B5590A', 'rgba(255,255,255,0.13)', '70%', 'Wallet' tab
- support: '#25D366', 4 FAQ questions, 'rotate(90deg)' pre-expanded, dropoff pointerdown handler
- All PascalCase exports: Default, Interactive, SourceCode
