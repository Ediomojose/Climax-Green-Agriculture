import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Pages/Home/HomePage";
import AboutPage from "../components/Pages/About/AboutPage";
import ServicePage from "../components/Pages/Services/ServicePage";
import ContactPage from "../components/Pages/Contact/ContactPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
