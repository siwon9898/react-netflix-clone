import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./api/request";
import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const Layout = () => {
  <div>
    <Nav />
    <Outlet />
    <Footer />
  </div>;
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
