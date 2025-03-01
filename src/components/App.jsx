import { Route, Routes } from 'react-router-dom';
import '../css/App.css'
import Home from './Home';
import About from './About';
import Course from './Course';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';
import PageNotFound from './PageNotFound';
import Table from './Table';
import RegisterHistory from './RegisterHistory';
import AdminLogin from './AdminLogin';
import AdminCourse from './AdminCourse';
import Dashboard from './Dashboard';


function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Home />}/>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='course' element={<Course />}/>
      <Route path='register' element={<Register />}/>
      <Route path='login' element={<Login />}/>
      <Route path='admin' element={<Admin />} />
      <Route path='table' element={<Table />} />
      <Route path='registerdetails' element={<RegisterHistory />} />
      <Route path='adminlogin' element={<AdminLogin />} />
      <Route path='admincourse' element={<AdminCourse />} />
      <Route path='dashboard' element={<Dashboard />} />
    
     

      <Route path="*" element={<PageNotFound />} />
     </Routes>
    </> 
      
  );
}

export default App;
