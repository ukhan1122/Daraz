
import './App.css';
import Header from './component/H&F/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './component/H&F/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Mydashboard from './component/MyDashboard/Mydashboard';
import Productdata from './component/Productdetail/Productdata';
import Cartdetail from './component/Cart/Cartdetail';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Mydashboard/*' element={<Mydashboard/>}/>
          <Route path='/product/:productId' element={<Productdata/>} />
          <Route path='/Cart' element={<Cartdetail/>}/>
        </Routes>
        
        <Footer/>
        
    </div>
        </Router>
  );
}

export default App;
