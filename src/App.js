import logo from './logo.svg';
import './App.css';
import { Menu } from './Components/menuCompo/menuCompo';
import { Sidebar } from './Components/Sidbar/Sidebar'

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <Menu />
    </div>
  );
}

export default App;
