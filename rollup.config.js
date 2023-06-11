import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

const DIST_DIRECTORY = 'dist'
 
const format = "esm",
  plugins = [
    typescript(), 
    copy({
      targets: [{ src: "manifest.json", dest: DIST_DIRECTORY}],
    }),
  ];

export default [
  {
    input: "src/background/background.ts",
    output: {
      dir: `${DIST_DIRECTORY}/background`,
      format,
    },
    plugins,
  },
  {
    input: "src/content/content.ts",
    output: {
      dir: `${DIST_DIRECTORY}/content`,
      format,
    },
    plugins,
  },
];
