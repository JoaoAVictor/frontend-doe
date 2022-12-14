import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Index";
import Header from "./components/Header";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Test from "./pages/Test";
import SideBar from "./components/SideBar";

function PageRoute({ page, rule, onHeader, onSide, ...props }) {
  return (
    <>
      {onHeader ? <Header rule={rule} /> : null}
      {onSide ? (
        <SideBar
          image={
            "https://thumbs.dreamstime.com/b/bunda-de-veados-veado-me-deu-uma-atitude-e-levanta-cauda-189570722.jpg"
          }
          name={"Bundinha Linda"}
          rule={rule}
        />
      ) : null}
      {page}
    </>
  );
}

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageRoute onHeader page={<Home />} />} />
        <Route path="/Cadastro" element={<PageRoute page={<Cadastro />} />} />
        <Route path="/Login" element={<PageRoute page={<Login />} />} />
        <Route path="*" element={<div>not found</div>} />
        <Route path="/test" element={<Test></Test>} />
      </Routes>
    </Router>
  );
}
