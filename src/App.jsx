import './index.css'
import Header from './Components/Header'
import HomeHero from './Components/Home-Hero';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import getProducts from './helpers/ProductAPI';
import ProductGrid from './Components/ProductGrid';
function App() {
  const[listProducts, setProducts] = useState([])

  useEffect(() =>{
   const productData = async () => {
    try {
       const retreiveProducts =  await getProducts("","3","")
       setProducts(retreiveProducts)
    } catch(err){
      console.error(err)
    }
   } 
     productData()
  }, [])

  return (
    <>
      <Header />
      <HomeHero />
      <ProductGrid products={listProducts} />
      <Footer />
    </>
  )
}

export default App
