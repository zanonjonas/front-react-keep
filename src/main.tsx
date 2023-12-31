import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/Home.tsx'
import { GlobalStyle } from './GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)
