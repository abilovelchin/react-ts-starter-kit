// uno.config.ts
import {
  defineConfig,
  transformerVariantGroup,
  transformerDirectives,
  transformerCompileClass,
  presetUno,
  presetIcons,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "green",
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass({
      classPrefix: "class-",
    }),
  ],
});
