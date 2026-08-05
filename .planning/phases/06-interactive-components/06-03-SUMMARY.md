# 06-03 SUMMARY — Press-state Components: Button, SocialAuthButtons

**Status:** COMPLETE (2026-08-05)
**Wave:** 2

## What was done
Added `Interactive` named export (first export in file) to 2 press-state component story files.

### Button
- makePhoneFrame() inline helper added
- Interactive: 4 button variants in phone frame (Primary, Secondary, Ghost, Disabled)
- Primary: pointerdown → bg #a8de1a + scale(0.97); pointerup/leave → restore
- Secondary: pointerdown → bg colorGrey800 + scale(0.97); pointerup/leave → restore
- Ghost: pointerdown → opacity 0.6; pointerup/leave → opacity 1
- Disabled: pointer-events:none; no listeners
- 9 addEventListener calls total

### SocialAuthButtons
- makePhoneFrame() inline helper added
- Interactive: Apple (electric green bg) + Google (white border) buttons centered
- Both: pointerdown → opacity 0.7; pointerup/leave → opacity 1
- 6 addEventListener calls total (3 per button)

## Verification
- Both: `Interactive` is first named export
- Both: `width:402px` present
- Button: 9 listeners, scale(0.97) pattern, opacity 0.6 pattern
- SocialAuth: 6 listeners, opacity 0.7 pattern
- All existing static exports retained
