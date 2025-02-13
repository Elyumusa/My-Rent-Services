import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/app'
import { Setting } from './const';

const root=createRoot(document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <App rentalOffersCount={Setting.rentOffersCount}/>
  </StrictMode>,
)



