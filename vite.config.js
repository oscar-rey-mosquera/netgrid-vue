import vue from '@vitejs/plugin-vue'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  }
}
