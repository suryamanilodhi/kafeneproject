import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import OrderPage from "../components/orderPage/OrderPage.js";
import ProductPage from "../components/productPage/ProductPage.js";
import Users from "../components/users/Users.js";
import Login from '../components/loginPage/Login.js'

const Routes = () => {


  return (
  <BrowserRouter>
    <ReactRoutes>
      <Route path="/" element={<Login />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<h1> Page Not Found  </h1>} />
    </ReactRoutes>
  </BrowserRouter>
  )
};

export default Routes;
