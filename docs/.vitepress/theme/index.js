// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import './custom.css'
/* style/index.css */
import './style/blur.css';
/* .vitepress/theme/style/index.css */
import './style/blockquote.css';
import HomeUnderline from "./components/HomeUnderline.vue"

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  enhanceApp({app}) {
    // 注册全局组件
    app.component('HomeUnderline' , HomeUnderline)
  }
}