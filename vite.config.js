import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Le dice a Vite que busque tus archivos index.html, JS y CSS dentro de la carpeta 'src'
  server: {
    port: 1234 // Configura el puerto fijo 1234
  }
})
