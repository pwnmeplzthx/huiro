import boundaries from "eslint-plugin-boundaries";

export const eslintBoundariesConfig = {
  plugins: {
    boundaries,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    "boundaries/elements": [
      {
        type: "app",
        pattern: "./src/app",
      },
      {
        type: "pages", 
        pattern: "./src/pages/*",
      },
      {
        type: "widgets",
        pattern: "./src/widgets/*",
      },
      {
        type: "features",
        pattern: "./src/features/*",
      },
      {
        type: "entities",
        pattern: "./src/entities/*",
      },
      {
        type: "shared",
        pattern: "./src/shared",
      },
    ],
  },
  rules: {
    "boundaries/element-types": [
      2,
      {
        default: "allow",
        rules: [
          // shared может импортировать только shared
          {
            from: "shared",
            disallow: ["app", "pages", "widgets", "features", "entities"],
            message: "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})",
          },
          // entities могут импортировать только shared и entities
          {
            from: "entities", 
            disallow: ["app", "pages", "widgets", "features"],
            message: "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})",
          },
          // features могут импортировать shared, entities и features
          {
            from: "features",
            disallow: ["app", "pages", "widgets"],
            message: "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})",
          },
          // widgets могут импортировать shared, entities, features и widgets
          {
            from: "widgets",
            disallow: ["app", "pages"],
            message: "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})",
          },
          // pages могут импортировать всё кроме app
          {
            from: "pages",
            disallow: ["app"],
            message: "Модуль нижележащего слоя (${file.type}) не может импортировать модуль вышележащего слоя (${dependency.type})",
          },
          // app может импортировать всё
        ],
      },
    ],
    "boundaries/entry-point": [
      2,
      {
        default: "disallow",
        message: "Модуль (${file.type}) должен импортироваться через public API. Прямой импорт из ${dependency.source} запрещен",
        rules: [
          {
            target: ["shared", "app"],
            allow: "**",
          },
          {
            target: ["entities", "features", "widgets", "pages"],
            allow: "index.(ts|tsx)",
            message: "Разрешены только импорты через index файлы или алиасы (@/)",
          },
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../*", "../../*", "../../../*", "../../../../*"],
            message: "Запрещены относительные импорты между слоями FSD. Используй алиасы (@/)",
          },
        ],
      },
    ],
  },
};