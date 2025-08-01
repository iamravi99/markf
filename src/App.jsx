import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Comp/Home';
import Disclaimer from './Comp/Disclaimer';
import StoryDetail from './Comp/StoryDetail';
import About from './Comp/About';
import DesiStories from './Comp/DesiStories';
import DesiStoryDetail from './Comp/DesiStoryDetail';

import Story2Detail from './Comp/Story2Detail';
import Story2 from './Comp/Story2';
import InstantMessageAd from './Comp/InstantMessageAd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/stories" element={<Story2 />} />
        <Route path="/about" element={<About />} />
         <Route path="/desi" element={<DesiStories />} />
         <Route path="/desi-story/:id" element={<DesiStoryDetail />} />
         <Route path="/story2/:id" element={<Story2Detail />} />

         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
