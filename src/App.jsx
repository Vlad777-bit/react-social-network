import './App.scss';

import Header from './layout/Header/Header';
import Navbar from './layout/Navbar/Navbar';
import Profiile from './components/Profile/Profiile';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Profiile />
    </div>
  );
}

export default App;
