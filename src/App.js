import "./App.css";
import Sidebar from "./components/SideNav";
import AppRoutes from "./routes";

import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Footer from "./components/Footer";

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <div className="flex bg-[#111821] text-gray-400">
        <Sidebar />
        <div className="container mx-auto mt-12 px-4">
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
