import Body from './componends/body/body'
import Header from './componends/header/header'
import './App.css'
import { useEffect } from 'react';
import { getDefaults } from './contextProvider';

export function App() {

  const { context } = getDefaults();
  useEffect(() => {
    if (context.theme) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = "light";
    }
    if (context.font === "serif") {
      document.body.style.fontFamily = 'Diphylleia, serif';
    } else {
      document.body.style.fontFamily = 'Nunito, sans-serif';
    }
  }, [context]);

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
