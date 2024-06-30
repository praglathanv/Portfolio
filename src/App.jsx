import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import Comet from './components/Commet';
import MainPage from './pages/MainPage';
import "./index.css"
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import FeatsPage from './pages/FeatsPage';

const App = () => {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<MainPage/>} />
          <Route path='/portfolio/skills' element={<SkillPage/>}/>
          <Route path='/portfolio/projects' element={<ProjectPage/>}/>
          <Route path='/portfolio/About' element={<AboutPage/>}/>
          <Route path='/portfolio/feats' element={<FeatsPage/>}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Comet/>
      </Router>
      
    </div>
  );
};

export default App;
