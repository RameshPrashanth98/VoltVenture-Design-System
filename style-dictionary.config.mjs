// style-dictionary.config.mjs
// AUTO-GENERATED scaffold — Plans 02 and 06 add custom transforms and formatters.
// Run with: node style-dictionary.config.mjs
import StyleDictionary from 'style-dictionary';
import { glob } from 'node:fs/promises';

// Plan 02: custom transforms
import { colorFlutterTransform } from './sd-transforms/color.flutter.mjs';
import { dimensionDoubleTransform } from './sd-transforms/dimension.double.mjs';
import { shadowBoxShadowTransform } from './sd-transforms/shadow.boxShadow.mjs';
import { lineHeightMultiplierTransform } from './sd-transforms/lineHeight.multiplier.mjs';

// Plan 06: custom Dart constants formatter
import { dartConstantsFormat } from './sd-transforms/dart-constants.format.mjs';

// Plan 07: TypeScript constants formatter + RN Paper theme formatter
import { tsConstantsFormat } from './sd-transforms/ts-constants.format.mjs';
import { rnPaperThemeFormat } from './sd-transforms/rn-paper-theme.format.mjs';

// Register custom transforms (must be done before building)
StyleDictionary.registerTransform(colorFlutterTransform);
StyleDictionary.registerTransform(dimensionDoubleTransform);
StyleDictionary.registerTransform(shadowBoxShadowTransform);
StyleDictionary.registerTransform(lineHeightMultiplierTransform);

// Register custom formatters
StyleDictionary.registerFormat(dartConstantsFormat);
StyleDictionary.registerFormat(tsConstantsFormat);
StyleDictionary.registerFormat(rnPaperThemeFormat);

// Resolve token source files — SD needs at least one source file to run.
// When tokens/ is empty (Plan 01 scaffold stage), skip the build gracefully.
let sourceFiles = [];
try {
  for await (const file of glob('tokens/**/*.json')) {
    sourceFiles.push(file);
  }
} catch {
  // glob not available — fallback handled below
  sourceFiles = [];
}

if (sourceFiles.length === 0) {
  console.log('style-dictionary: no token source files found in tokens/ — skipping build.');
  process.exit(0);
}

const sd = new StyleDictionary({
  usesDtcg: true,
  source: ['tokens/**/*.json'],
  platforms: {
    dart: {
      // Plan 02 registers: voltventure/color/flutter, voltventure/dimension/double,
      //                    voltventure/shadow/boxShadow, voltventure/lineHeight/multiplier
      // Plan 06 registers: voltventure/dart/constants formatter
      transforms: [
        'name/camel',
        'voltventure/color/flutter',
        'voltventure/dimension/double',
        'voltventure/shadow/boxShadow',
      ],
      buildPath: 'lib/',
      files: [
        {
          destination: 'voltventure_tokens.dart',
          format: 'voltventure/dart/constants',
        },
      ],
    },
    'ts/constants': {
      transforms: ['name/camel', 'color/hex'],
      buildPath: 'lib/',
      files: [
        {
          destination: 'voltventure_tokens.ts',
          format: 'voltventure/ts/constants',
        },
      ],
    },
    'rn/theme': {
      transforms: ['name/camel'],
      buildPath: 'lib/',
      files: [
        {
          destination: 'voltventure_theme.ts',
          format: 'voltventure/rn/theme',
          // Filter to semantic color tokens to trigger SD; formatter ignores dictionary
          filter: (token) => {
            const fp = (token.filePath || '').replace(/\\/g, '/');
            return fp.includes('/semantic/') && (token.$type || token.type) === 'color';
          },
        },
      ],
    },
    'js/reference': {
      transforms: ['name/camel', 'color/hex'],
      buildPath: 'generated/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
