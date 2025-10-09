import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import useThemeStore from "./store/themeStore";

const App = () => {
  const { isDarkMode } = useThemeStore();
  return (
    <BrowserRouter>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App
