import { Routes , Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ParentPage from './pages/ParentPage';
import CartPage from "./pages/CartPage";
import SingleProduct from "./SingleProduct";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className='font-bodyFont'>
      <Routes>
        <Route path='/' element={ <ParentPage /> } >
          <Route index element={ <HomePage/> } />
          <Route path='/cart' element={ <CartPage/> } />
          <Route path='/login' element={ <LoginPage/> } />
          <Route path='/product/:id' element={ <SingleProduct/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
