 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Auth/>} path='/login'/>
       <Route element={<Layout/>} path='/'>
           <Route index  element={<Home/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
