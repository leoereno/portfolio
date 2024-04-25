import './App.css';
import Home from './pages/Home/Home';
import LangProvider from './contexts/langContext';
import ThemeProvider from './contexts/theme-context';
//import cv from '../src/assets/CV - Leonardo Ereno(br)-3.pdf'

function App() {
  return(
  <ThemeProvider>
    <LangProvider>      
        <Home />
    </LangProvider>
  </ThemeProvider>

  );
}

export default App;
