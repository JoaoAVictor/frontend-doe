import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Index";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Test from "./pages/Test";

function PageRoute({ page, rule, offHeader, ...props }) {
  return (
    <>
      {offHeader ? null : <Header rule={rule} />}
      {page}
    </>
  );
}

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageRoute page={<Home />} />} />
        <Route
          path="/Cadastro"
          element={<PageRoute offHeader page={<Cadastro />} />}
        />
        <Route
          path="/Login"
          element={<PageRoute offHeader page={<Login />} />}
        />
        <Route path="*" element={<div>not found</div>} />
        <Route path="/test" element={<Test></Test>} />
      </Routes>
    </Router>
  );
}
