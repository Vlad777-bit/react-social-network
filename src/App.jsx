import './App.scss';

import Header from './layout/Header/Header';
import Navbar from './layout/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="app-content">
        <Dialogs />
      </main>
    </div>
  );
};

export default App;
