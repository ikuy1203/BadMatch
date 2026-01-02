import { BrowserRouter, Routes, Route } from 'react-router';
import { MatchPage } from '@/pages/match';
import { StartPage } from '@/pages/start';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/match" element={<MatchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
