import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Добавляем TypeScript конфиг
      react.configs.flat.recommended,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 'latest', // Меняем на 'latest' для поддержки современного синтаксиса
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022, // Обновляем до последней версии
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Отключаем правило, которое требует импорт React
      'react/react-in-jsx-scope': 'off',
      
      // Правила для отступов
      'indent': ['error', 2],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      
      // Другие полезные правила
      'no-mixed-spaces-and-tabs': 'error',
      'no-trailing-spaces': 'error',
      'react/jsx-tag-spacing': 'error',
      
      // Дополнительные правила для TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  // Добавляем конфиг для JavaScript файлов, если они есть
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
])