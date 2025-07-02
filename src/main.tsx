import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.tsx'
import { ThemeProvider } from './provider/theme-provider.tsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>

    </ThemeProvider>
  </StrictMode>,
)
