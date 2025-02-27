import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run edw-nx-image-picker:serve',
        production: 'nx run edw-nx-image-picker:preview',
      },
      ciWebServerCommand: 'nx run edw-nx-image-picker:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
