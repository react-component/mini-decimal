// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'mini-decimal',
  },
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
});
