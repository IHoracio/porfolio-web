import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.js'
import { LanguageProvider } from './contexts/LanguageContext.jsx'

const rootElement = document.getElementById('root');

if(rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
  )
}