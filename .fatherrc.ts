import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
  umd: {
    output: 'dist/umd',
    extractCSS: false,
    externals: { react: 'React' },
    entry: 'src/index',
  },
});
