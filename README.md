<h2>Motivation</h2>
The motivation come from a ts based browser extension with background and content script and rollup as bundler.

<h2>Project directory structure</h2>
<ul>
<li>background.ts under src/background</li>
<li>content.ts under src/content</li>
<li>manifest.json in the project root</li>
</ul>
 
<h2>Constriants</h2>
<ul>
<li>dist directory should have only background/background.js , content/content.js and manifest.json</li>
<li>background.ts should be allowed to import</li>
<li>it should be able to use chrome api in the ts file</li>
</ul>
 
<h2>Setup</h2>
<ul>
<li>typescript is installed globally</li>
<li>all rollup plugin and packages should be installed with -D</li>
<li>create package.json using

```
npm init -y
```
</li>
<li>create rollup.config.js (i see no benefit of using here ts , it will require more configuarton)</li>
<li>create build script to use rollup.config.js with watch mode 

```
"build": "rollup -c -w"
```
</li>
<li>add  

```
"type": "module"
```
to packages.json to allow mpdule import</li>
<li>

The following will allow using chrome api
```
npm i -D @types/chrome 
```
</li>
<li>handle few input and output by using an array in roolup.config.ts

```
import typescript from "@rollup/plugin-typescript";

const format = "esm",
  plugins = [typescript()];

export default [
  {
    input: "src/background/background.ts",
    output: {
      dir: "dist/background",
      format,
    },
    plugins,
  },
  {
    input: "src/content/content.ts",
    output: {
      dir: "dist/content",
      format,
    },
    plugins,
  },
];

```
</li>

</ul>



<h2>Design</h2>
<ul>
<li>ts to js will be handled by rollup  @rollup/plugin-typescript (require tslib)</li>
<li>copy of manifest.json to dist directory will be handled by rollup-plugin-copy</li>
<li>use rollup config file rollup.config.ts</li>
</ul>


<h2>Scripts</h2>
<p>build script is used to create the dist directory</p>
<p>other script are not relevant for browser extension but shouwn here pnly to check that the build is actually working</p>

```
  "build": "rollup -c -w",
  "start1": "node  dist/background/background.js",
  "start2": "node  dist/content/content.js",
  "dev1": "nodemon  dist/background/background.js",
  "dev2": "nodemon  dist/content/content.js"
```
