# Webpack congifuration

config in general consists of:
- plugins
- loaders
- entry-output configuration 

## General steps for webpack configuration:
1) install necessary plugins and loaders
2) install typescript support
3) configure env variables
4) configure support for module styles and default styles
5) install react
6) configure dev server

> [!TIP]
> It is better to make webpack modular by separating it into buildResolver, buildLoader and buildPlugins modules (so you can modificate it later and make it more flexible and maintainable)


