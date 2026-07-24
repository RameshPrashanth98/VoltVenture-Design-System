# Community SD Dart Formatter Search

**Searched:** 2026-07-24
**Decision reference:** D-01 (01-CONTEXT.md)

## Search Result: NOT FOUND

### Queries Performed

| Source | Query | Result |
|--------|-------|--------|
| pub.dev | "style_dictionary dart" | No results — SD is a Node.js tool; formatters do not live on pub.dev |
| pub.dev | "style dictionary dart flutter" | No results |
| npm registry | "style-dictionary dart" | No dedicated Dart formatter package found |
| GitHub | "style-dictionary dart formatter" | SD v3 gists exist (use v3 API: `value`/`type` keys) — incompatible with SD v4 |
| GitHub | "style-dictionary flutter" | Community repos use SD v3 API and lack BoxShadow / height-multiplier handling |

### Conclusion

No viable SD v4 Dart formatter found. All community examples use the SD v3 API
(`value`/`type`, `StyleDictionary.extend()`) which is incompatible with SD v4
(`$value`/`$type`, `new StyleDictionary(config)`).

**Action taken:** Building 4 custom transforms per D-01 and D-02 decisions:
1. `voltventure/color/flutter` — #RRGGBB → Color(0xFFRRGGBB)
2. `voltventure/dimension/double` — "16pt" or 16 → 16.0
3. `voltventure/shadow/boxShadow` — DTCG shadow object → BoxShadow(...) string
4. `voltventure/lineHeight/multiplier` — lineHeight / fontSize → height multiplier
