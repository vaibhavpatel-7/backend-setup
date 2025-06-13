import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintParserTypeScript from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  // 1. Base ESLint recommended rules
  {
    files: ['**/*.ts', '**/*.mts', '**/*.js', '**/*.mjs'], // Apply to all your source files
    ignores: ['node_modules/', 'dist/'], // Files/directories to ignore
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    linterOptions: {
      // Report unused eslint-disable directives
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      // General ESLint rules
      // 'no-console': 'warn',
      // Add other base ESLint rules you want
    },
  },

  // 2. TypeScript specific configuration
  {
    files: ['**/*.ts', '**/*.mts'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: './tsconfig.json', // Crucial for type-aware linting
        // Add other parserOptions as needed, e.g., ecmaVersion and sourceType are covered by the base config
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      // Recommended TypeScript rules from @typescript-eslint/eslint-plugin
      ...eslintPluginTypeScript.configs['eslint-recommended'].rules, // Disable conflicting ESLint core rules
      ...eslintPluginTypeScript.configs.recommended.rules, // Recommended TypeScript rules

      // Custom TypeScript rules overrides/additions
      'no-unused-vars': 'off', // Turn off base ESLint rule
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Enable for stricter function return types
      '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type, adjust for stricter typing
    },
  },

  // 4. Import plugin configuration
  {
    files: ['**/*.ts', '**/*.mts', '**/*.js', '**/*.mjs'],
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.mts'],
          moduleDirectory: ['node_modules', 'src'],
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.mts'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
      },
    },
    rules: {
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginImport.configs.typescript.rules, // Enable TypeScript support for import plugin
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-default-export': 'off', // If you use default exports
      'import/prefer-default-export': 'off', // If you prefer named exports
    },
  },

  // 5. Prettier integration (MUST BE LAST in the array to override other formatting rules)
  {
    files: ['**/*.ts', '**/*.mts', '**/*.js', '**/*.mjs'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 100,
          semi: true,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },
];
