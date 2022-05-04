import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import SkillsScreen from './components/skills-screen/SkillsScreen';
import MainScreen from './components/main-screen/MainScreen';
import { IHero } from './entities/interfaces';
import { RootState } from './redux/store';

function App() {
  const heroes: IHero[] = useSelector((state: RootState) => state.heroes.heroes);
  if (heroes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/skills" element={<SkillsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
