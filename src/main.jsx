import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopPage from './Pages/ShopPage.jsx'
import OrderDetails from './Pages/OrderDetails.jsx'
import Checkout from './Pages/Checkout.jsx'
import ProductPage from'./Components/ProductPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  { path: "product/:id",
    element: <ProductPage />
   },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "order-details",
    element: <OrderDetails />,
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
