import { Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home/home'
import Pagelayout from './pagelayout/pagelayout'
import Page from './components/Page/page'
import Products from './components/Product/Product'
import Blog from './components/Blog/Blog'
import Contact from './components/contact/contact'
import Shop from './components/shop/Shop'

function App() {


  return (
    <>

  <Routes>
  <Route path="/" element={<Pagelayout/>} >
  <Route index  element={<Home/>} />
  <Route path='page'  element={<Page/>} />
  <Route  path='products' element={<Products/>} />
  <Route  path='Blog'  element={<Blog/>} />
  <Route  path='Shop'  element={<Shop/>} />
  <Route  path='contact' element={<Contact/>} />
  
  </Route>
  </Routes>
    </>
  )
}

export default App