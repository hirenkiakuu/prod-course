import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          // esModule: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",

            namedExport: false, // добавил, чтобы использовать именованный импорт, в 7 версии namedExport по умолчанию true, поэтому импортировать можно только как import * as
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
}
