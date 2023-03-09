import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Sidebar from "../components/sidebar/Sidebar";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Sidebar />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
