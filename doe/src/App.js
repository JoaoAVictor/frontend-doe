import "./App.css";
import "@fontsource/inter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rotas from "./routes";

function App() {
  return (
    <div className="App">
      <Rotas />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
