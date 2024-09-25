import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegúrate de que la base sea correcta
  resolve: {
    alias: {
      '@': 'src',  // Alias directo a la carpeta src
    },
  },
});
