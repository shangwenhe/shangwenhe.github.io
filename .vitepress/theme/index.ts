import DefaultTheme from 'vitepress/theme'
import MyLayout from './my-layout.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}
