import './App.css'
import { FaMusic } from "react-icons/fa";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import PageNotFound from './Pages/PageNotFound';
function App() {
  

  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/watch-history' element={<WatchHistory/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>
<Footer/>

      {/* <h1 className='text-primary'><FaMusic />Media App</h1> */}
    </>
  )
}

export default App
