const dependencies = require('./package.json').dependencies;
const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });
  return result.css;
}

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'lib',
    bundle: true,
    minify: true,
    platform: 'node',
    target: ['node12'],

    external: ['react', 'react-dom', '@vanilla-extract/css', ...Object.keys(dependencies)],
    plugins: [vanillaExtractPlugin({ processCss })],
  })
  .catch(() => process.exit(1));
