import path from "path";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import Unocss from "unocss/vite";
import presetWind3 from "@unocss/preset-wind3";

export default defineConfig({
  plugins: [
    solid(),
    Unocss({
      presets: [presetWind3()],
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
