// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout
}