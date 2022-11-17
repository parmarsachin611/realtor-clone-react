import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/sign-in" element = { <SignIn /> } />
          <Route path = "/sign-up" element = { <SignUp /> } />
          <Route path = "/forgot-password" element = { <ForgotPassword /> } />
          <Route path = "/offers" element = { <Offers /> } />
          <Route path="/profile" element = { <PrivateRoute /> } >
            <Route path = "/profile" element = { <Profile /> } />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  );
}

export default App;
