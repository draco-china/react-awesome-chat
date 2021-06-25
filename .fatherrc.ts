/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-26 02:51:28
 * @LastEditTime: 2021-06-26 04:03:50
 */

export default {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    sourcemap: true,
    minFile: true,
    globals: {
      react: 'React',
    },
  },
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
};
