import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Home from './component/home';
import About from './component/about';
import Greeting from './component/greeting';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DataTable from './component/table';
import DataTable2 from './component/tableMui';
import RefNew from './component/ref';
import SearchAppBar from './component/nav2';




function App() {
  return(
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/greeting' element={<Greeting />}/>
        <Route path='/table' element={<DataTable />}/>
        <Route path='/tableMui' element={<DataTable2 />}/>
        <Route path='/ref' element={<RefNew/>}/>
        <Route path='/nav2' element={<SearchAppBar/>}/>
        

       


        
      </Routes>
    {/* <ButtonAppBar/> */}

      {/* <Footer /> */}
      
    </BrowserRouter>
  )
}


export default App;
