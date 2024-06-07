// App.js
import  { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./view/home/home";
import Aboutme from "./view/aboutme/aboutme";
import Navbar from "./componets/navbar/navbar";
import Proyect from "./view/proyects/proyect";
import Contact from "./view/contact/contact";
import { auth } from "./firebaConfi";
import Loader from "./componets/loader/loader"; // Importa el componente Loader

export const AuthContext = createContext();

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <section className="loyaut">
        {location.pathname !== "/" && (
          <header className="header">
            <Navbar />
          </header>
        )}
        <main className="main">{children}</main>
      </section>
    </>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false); // Detiene la carga después de la verificación
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />; // Muestra el loader mientras se verifica la autenticación
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<LayoutWrapper />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

const LayoutWrapper = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/SobreMi" element={<Aboutme />} />
        <Route path="/Proyecto" element={<Proyect />} />
        <Route path="/Contactame" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
