 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} path='/'>
           <Route index  element={<Home/>}/>
      </Route>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
