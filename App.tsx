
import React from 'react';
import { MainSection } from './components/MainSection';

const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden selection:bg-blue-500 selection:text-white">
      <main>
        <MainSection />
      </main>
    </div>
  );
};

export default App;
