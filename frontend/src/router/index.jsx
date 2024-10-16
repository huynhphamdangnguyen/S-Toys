import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/accounts/Login";
import Register from "../pages/accounts/Register";
import Error from "../pages//error/Error";
import AdminLayout from "../layout/AdminLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}></Route>
    </>
  )
);

export default router;
