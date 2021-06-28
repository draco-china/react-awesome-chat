/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-26 02:51:28
 * @LastEditTime: 2021-06-29 01:24:39
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
  cssModules: {
    generateScopedName: '[name]_[local]_[hash:base64:5]',
  },
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
};
