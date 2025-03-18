import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import LayoutContextProvider from './context/LayoutContext.tsx'
createRoot(document.getElementById('root')!).render(
    <LayoutContextProvider>
        <App />
    </LayoutContextProvider>
)
