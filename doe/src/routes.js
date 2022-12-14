import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Index";
import Header from "./components/header/Header";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Test from "./pages/Test";
import SideBar from "./components/SideBar";
import Loja from "./pages/dashboard/Loja";
import Comunidades from "./pages/dashboard/comunidades/Comunidades";
import Comunidade from "./pages/dashboard/comunidades/Comunidade";
import Perfil from "./pages/dashboard/Perfil";
import Campanhas from "./pages/dashboard/Campanhas";
import CadastroOrg from "./pages/CadastroOrg";

function PageRoute({ page, onAuth, onHeader, onSide, ...props }) {
  return (
    <>
      {onHeader ? <Header onAuth={onAuth} /> : null}
      {onSide ? (
        <SideBar
          image={sessionStorage.getItem("imgPerfil")}
          name={sessionStorage.getItem("nome")}
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
        <Route
          path="/CadastroOrg"
          element={<PageRoute onHeader onSide onAuth page={<CadastroOrg />} />}
        />
        <Route path="/Login" element={<PageRoute page={<Login />} />} />
        <Route path="*" element={<div>not found</div>} />
        <Route path="/test" element={<PageRoute onSide page={<Test />} />} />
        <Route
          path="/loja"
          element={<PageRoute onSide onHeader onAuth page={<Loja />} />}
        />
        <Route
          path="/comunidades"
          element={<PageRoute onSide onHeader onAuth page={<Comunidades />} />}
        />
        <Route
          path="/comunidades/comunidade"
          element={<PageRoute onSide onHeader onAuth page={<Comunidade />} />}
        />
        <Route
          path="/perfil"
          element={<PageRoute onSide onHeader onAuth page={<Perfil />} />}
        />
        <Route
          path="/campanhas"
          element={<PageRoute onSide onHeader onAuth page={<Campanhas />} />}
        />
      </Routes>
    </Router>
  );
}
