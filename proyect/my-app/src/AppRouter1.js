import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import HomePage from '../src/pages/home/HomePage'
import NotFoundPage from '../src/pages/404/NotFoundPage'
import AboutPage from '../src/pages/About-faqs/AboutPage'
import ProfilePage from '../src//pages/profile/ProfilePage'
import TasksPage from '../src//pages//tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import { useEffect, useState } from 'react';
import StatePage from '../src//pages//home/StatePage'
import RegisterFormik from './components/pure/forms/registerFormik'

 function AppRouter1() {

  let logged = false;

  const AskLogin = () => {
    alert('Please log inn');
    return <LoginPage/>
  }

  const [index,setIndex] = useState([0,1])
  const [taskList,setTaskList] = useState([
    {
      id: 1,
      name: "task1",
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: "My second task"
    }
  ])

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User is logged?', logged)
  }, []);


  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/register'>| Register |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/404'>| UNEXISTED ROUTE|</Link>
          <Link to='/profile'>| PROFILE |</Link>
          <Link to='/tasks'>| Tasks |</Link>
          <Link to={'/tasks/1'}>| Task 1 |</Link>
          <Link to='/tasks/2'>| Task 2 |</Link>
        </aside>

        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>  
            <Route path='/online-state' element={<StatePage/>}></Route>
            <Route path='/login' element={logged? <Navigate to='/profile'/> : <LoginPage/>}/>
            <Route path='/register' element={<RegisterFormik/>}/>
            
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/faqs' element={<AboutPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>

            <Route path='/profile' element={logged? <ProfilePage/> : <AskLogin/>}/>
            
            <Route path='/tasks' element={logged? <TasksPage/> : <AskLogin/>}/>
            <Route path='/tasks/:id' element={<TaskDetailPage task={taskList}/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter1;
