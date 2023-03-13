import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArroundU from "../components/pages/ArroundU";
import Artists from "../components/pages/Artists";
import Charts from "../components/pages/Charts";
import Discover from "../components/pages/Discover";
import Sidebar from "../components/sidebar/Sidebar";
const Router = () => {
  return (
    <div className="w-screen flex flex-col md:flex-row ">
      <BrowserRouter>
        <Routes >
          <Route element={<Sidebar />}>
            <Route path="/" element={<Discover />} />
            <Route path="/arroundu" element={<ArroundU />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/charts" element={<Charts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default Router;
