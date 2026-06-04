import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://rasmusthorkildsen.cv',
  integrations: [icon()],
});