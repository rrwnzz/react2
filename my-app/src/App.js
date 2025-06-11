import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Home from './component/home';
import About from './component/about';
import Greeting from './component/greeting';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/greeting' element={<Greeting />}/>

        
      </Routes>
    {/* <ButtonAppBar/> */}

      {/* <Footer /> */}
      
    </BrowserRouter>
  )
}


export default App;
