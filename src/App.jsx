import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers.js';
import { Suspense } from 'react';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {
            routers.map((item, index) => {
              return (
                <Route path={item.path} element={<item.component />} key={index} />
              );
            })
          }
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
