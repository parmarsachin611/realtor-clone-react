import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


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
          <Route path = "/profile" element = { <Profile /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
