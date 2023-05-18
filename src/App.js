import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Header from './Components/Header';
import AddCategory from './Pages/addCategory';
import AddBlog from './Pages/addBlog';
import SingleBlog from './Pages/singleBlog';
import PrivteRoutes from './Services/Protected';
import NotFound from './Pages/pageNotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/' element={<PrivteRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/addCategory' element={<AddCategory />} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/singleBlog/:id' element={<SingleBlog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
