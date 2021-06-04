import { defineConfig } from 'dumi';
import { nav } from './config';
export default defineConfig({
  title: '小宅',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: '/lh-libs/',
  base: '/lh-libs/',
  mode: 'site',
  navs: nav
});
