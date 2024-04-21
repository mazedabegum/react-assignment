
import Home from './Pages/Home/Home'
import Header from './component/Header/Header'

import Services from './Pages/Services/Services'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Footer from './component/Footer/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='Blog' element={<Blog/>}/>
      <Route path='Contact' element={<Contact/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    



    


      
        
      
    </>
  )
}

export default App
