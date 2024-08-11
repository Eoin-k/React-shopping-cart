import './index.css'
import { Link } from 'react-router-dom'
import Header from './Components/Header'
function App() {

  return (
    <>
      <Header />
    <Link to={"shop"}>Shop Page</Link>
    </>
  )
}

export default App
