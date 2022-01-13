import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './layout/Header/Header';
import Navbar from './layout/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="dialogs" element={<Dialogs />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="music" element={<Music />}></Route>
            <Route path="settings" element={<Settings />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
