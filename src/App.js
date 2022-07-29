import './App.css';
import { Navbar } from './components/Navbar';
import { Pages } from './pages/Pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <marquee behavior="" direction="">Please Click On login button more than one To enter</marquee>
      <Pages />
    </div>
  );
}

export default App;
