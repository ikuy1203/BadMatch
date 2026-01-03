import { BrowserRouter, Route, Routes } from 'react-router';
import { MatchPage } from '@/pages/match/index.tsx';
import { StartPage } from '@/pages/start/index.tsx';

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
