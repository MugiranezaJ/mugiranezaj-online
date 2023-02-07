import './App.css';
import Sidebar from './components/SideNav';
import AppRoutes from './routes';

import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
      <div className="flex-1 bg-[#111821] text-gray-400">
        <div className="flex bg-[#111821] text-gray-400">
          
          <Sidebar/>
          <div className="container mx-auto mt-12 px-4">
            <AppRoutes/>
            <div className="flex justify-center mt-20 mb-7 text-gray-400">
                <p><small>&copy;{new Date().getFullYear()} <a href="https://www.github.com/MugiranezaJ" target={"_blank"} rel="noreferrer" className="font-bold text-blue-900 hover:underline">MugiranezaJ</a> || Design inspired by <a href="https://www.kbly.com.tw/" target={"_blank"} rel="noreferrer" className="font-bold text-blue-900 hover:underline">kbly</a></small></p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
