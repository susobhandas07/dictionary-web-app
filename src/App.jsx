// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Body from './componends/body/body'
import Header from './componends/header/header'
import './App.css'
import { useEffect } from 'react';
import { useTheme } from './contextProvider';

export function App() {

  const { context } = useTheme();
  if (context.theme) {
    document.documentElement.className = 'dark';
  } else {
    document.documentElement.className = "light";
  }

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
