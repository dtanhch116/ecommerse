import { useState } from 'react';
import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MyButton from '@components/Button/Button';

function App() {

  return (
    <>
    <MainLayout>
      <MyButton />
    </MainLayout>
    </>
  )
}

export default App
