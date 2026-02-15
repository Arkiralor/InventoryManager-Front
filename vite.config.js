import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
    ],
    define: {
      'import.meta.env.COMPANY_NAME': JSON.stringify(env.COMPANY_NAME),
      'import.meta.env.COMPANY_ADDRESS': JSON.stringify(env.COMPANY_ADDRESS),
      'import.meta.env.COMPANY_EMAIL': JSON.stringify(env.COMPANY_EMAIL), 
      'import.meta.env.COMPANY_PHONE': JSON.stringify(env.COMPANY_PHONE),
    },
  }
})
