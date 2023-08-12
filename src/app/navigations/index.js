import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route
        path="*"
        element={
          <center>
            <div
              style={{
                color: "white",
                width: "100%",
                height: "100%",
                fontSize: 200,
              }}
            >
              404
            </div>
          </center>
        }
      />
    </Routes>
  );
};
export default Navigation;
