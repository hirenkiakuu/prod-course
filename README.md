# About Project

## Project includes:

- Bundler: webpack
- Stylization: scss modules
- Linters: eslint, stylelint
- i18n
- Storybook
- JEST, RTL
- Architecture: FSD

# Webpack congifuration

config in general consists of:

- plugins
- loaders
- entry-output configuration

## General steps for webpack configuration:

1. install necessary plugins and loaders
2. install typescript support
3. configure env variables
4. configure support for module styles and default styles
5. install react
6. configure dev server

> [!TIP]
> It is better to make webpack modular by separating it into buildResolver, buildLoader and buildPlugins modules (so you can modificate it later and make it more flexible and maintainable)

---

# Feature Sliced Design

Consists of layers -> slices -> segments

Top level folders are called layers:

- **app** - routing, entrypoints, global styles, providers
- **processes (deprecated)** - complex inter-page scenarios
- **pages** - full pages
- **widgets** - large chunks of UI: headers, footers, sidebars etc.
- **features** - reusable implementations of entire product features
- **entities** - buisiness entities
- **shared** - reusable functionality that can be detached from project

Each layer may consist of slices. For example, layer entitites may include slices:

- **user**
- **post**
- **comment**

Each slice contains segments such as:

- **ui** - everything related to UI display
- **api** - backend interactions, data types, mappers etc.
- **model** - data models: schema, interface, store, business logic
- **lib** - library that other modules of that slice need
- **config** - config files

![fsd architecture schema](https://feature-sliced.design/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg)

---

# Useful links

## Webpack

- ![hmr](https://webpack.js.org/guides/hot-module-replacement/)
- ![plugins]
- ![loaders]

## Babel

- ![getting started](https://babeljs.io/setup#installation)

## Eslint

- ![getting started](https://eslint.org/docs/latest/use/getting-started)

## Stylelint

- ![getting started](https://stylelint.io/user-guide/get-started/)

## i18n

- ![getting started](https://react.i18next.com/latest/using-with-hooks)

## Jest

- ![getting started](https://jestjs.io/ru/docs/getting-started)

---

# FAQ Section
