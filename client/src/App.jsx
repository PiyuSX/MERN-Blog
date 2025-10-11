import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import useThemeStore from "./store/themeStore";
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { isDarkMode } = useThemeStore();
  return (
    <BrowserRouter>
    <Toaster />
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App
