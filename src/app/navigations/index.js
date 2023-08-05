import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
export default Navigation;
