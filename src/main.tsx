import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PersistGate } from "redux-persist/integration/react"
import { store as reduxPersistStore, persistor } from "./store/redux-persist-store";

import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient()

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </QueryClientProvider>
//   </StrictMode>,
// )



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <Provider store={reduxPersistStore}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)

