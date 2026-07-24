// style-dictionary.config.mjs
// AUTO-GENERATED scaffold — Plans 02 and 06 add custom transforms and formatters.
// Run with: node style-dictionary.config.mjs
import StyleDictionary from 'style-dictionary';
import { glob } from 'node:fs/promises';
import path from 'node:path';

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
      // Plan 06 registers: custom Dart constants formatter
      transforms: ['name/camel'],
      buildPath: 'lib/',
      files: [
        {
          destination: 'voltventure_tokens.dart',
          format: 'javascript/es6',
        },
      ],
    },
    'dart/theme': {
      // Plan 06 registers: custom Dart ThemeData formatter
      transforms: ['name/camel'],
      buildPath: 'lib/',
      files: [
        {
          destination: 'voltventure_theme.dart',
          format: 'javascript/es6',
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
