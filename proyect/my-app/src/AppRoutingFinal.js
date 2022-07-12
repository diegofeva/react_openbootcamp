import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import NotFoundPage from '../src//pages//404/NotFoundPage'
import LoginPage from '../src//pages//auth/LoginPage'
import Dashboard from '../src//pages//dashbord/Dashboard'



 function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirects to protect our routes */}
        <Route path='/' element={ 
          loggedIn?
          <Navigate from='/' to='/dashboard'/>
          :
          <Navigate from='/' to='/login'/>
        }/>

 
        {/* Login route */}
        <Route path='/login' element={<LoginPage/>}/>
        {/* Dashboard */}
        <Route path='/dashboard' element={
          loggedIn?
          <Dashboard/>
          :
          <Navigate from='/' to='/login'/>
        }/>
        <Route element={<NotFoundPage/>}/>
      </Routes>

    </Router>
   
  );
}

export default AppRoutingFinal;
