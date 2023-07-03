# 项目总结
## 项目开发平台
项目介绍了五座城市，使用Vue3 + Element + Vite在Visual Studio Code进行开发
## 项目开发过程
### -主页
主页上方为一走马灯，使用了el-carousel进行设计（[链接](https://element-plus.org/zh-CN/component/carousel.html)），轮流播放所要介绍的五个城市的图片
### -城市详情页
城市详情页为城市的具体介绍，主要介绍城市的历史起源和景点名胜等
### -其它
开发过程中虽有组件库和框架的帮助，但也少不了要去学习了解CSS等的原理，只有理解好相关的原理，才能真正熟悉地应用
## 总结
本项目使用较为基础的WEB技术开发了一个静态网页，在此次WEB学习和开发过程中，对WEB技术和Vue框架有了深入的了解，我在HTM、CSS、JavaScript和TypeScript的学习中得到了很多的练习，知道了居中的多个方式、知道了如何让动效变得丝滑等等内容，也明白了其实自己有很多的不足。个人认为CSS在它们三个之中是灵活性最高的，也是内容最多的；如果想要成为一名优秀的前端开发者，单凭那些组件库、框架而不深入CSS是很难做出自己的东西的，也为我今后的学习指引了方向。

-----
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
