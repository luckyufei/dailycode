import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', './playground/**/*.*', './playground-temp/**/*.*'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watch: false,
    testTimeout: 20000,
    coverage: {
      all: true,
      provider: 'c8',
      reporter: ['html'],
      reportsDirectory: '.coverage'
    }
  },
  esbuild: {
    target: 'node16',
  },
});
