import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login'
import Main from './pages/main/Main'
import LayOut from './pages/LayOut'
import Categories from './pages/categories'
import Register from './pages/register'
import AboutUs from './pages/about-us'
import ItemPage from './pages/item-page/ItemPage';
import Vacancies from './pages/vacancies/Vacancies';

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayOut />}>
              <Route index element={<Main />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/item-page/:id' element={<ItemPage />} />
              <Route path='/vacancies' element={<Vacancies />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
