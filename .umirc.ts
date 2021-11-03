import routes from './src/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  base: '/app1',
  publicPath: '/app1/',
  outputPath: 'dist/app1/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  qiankun: {
    slave: {},
  },
  fastRefresh: {}, // 开启快速刷新
  // mfsu: {}, // 开启快速构建
  hash: true,
  ignoreMomentLocale: true, // 忽略moment的文件
});
