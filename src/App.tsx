import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import SkillsScreen from './components/SkillsScreen';
import MainScreen from './components/MainScreen';
import { RootState } from './redux/store';
import {THero} from "./components/MainScreen/components/HeroesBlock/types";

function App() {
  const heroes: THero[] = useSelector((state: RootState) => state.heroes.heroes);
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
