import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import Register from './components/Register';
import Home from './components/Home';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';
import { Toaster } from 'react-hot-toast';
import EditSingleToDo from './components/EditSingleToDo';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/todo' element={<RequireAuth><ToDo /></RequireAuth>} />
        <Route path='/calendar' element={<RequireAuth><Calendar /></RequireAuth>} />
        <Route path='/completedTasks' element={<RequireAuth><CompletedTask /></RequireAuth>} />
        <Route path='/singleToDo/:id' element={<RequireAuth><EditSingleToDo /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <Toaster />
    </section>
  );
}

export default App;
