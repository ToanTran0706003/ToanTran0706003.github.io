import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import { useEffect, useState } from 'react';
import { config } from './constants/config';
import type { Language } from './types';

const App = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar language={language} setLanguage={setLanguage} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Experience language={language} />
        <Tech />
        <Works language={language} />
        <Feedbacks language={language} />
        <div className="relative z-0">
          <Contact language={language} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
