import HomePage from '@components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers.js';
import { Suspense } from 'react';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import SideBar from '@components/SideBar/SideBar';
import { ToastProvider } from '@/contexts/ToastProvider';

function App() {

  return (
    <ToastProvider>
      <SideBarProvider>
      <SideBar />
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
    </SideBarProvider>
    </ToastProvider>
  )
}

export default App
