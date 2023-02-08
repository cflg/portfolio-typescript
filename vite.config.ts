import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import dns from 'dns';
dns.setDefaultResultOrder('verbatim');
// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
  return defineConfig({
    plugins: [react()],
    server: {
      strictPort: false,
      port: parseInt(process.env.PORT),
    },
  });
};
