import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Visitor/Layouts/Header/Header'
import Body from '../src/Visitor/Layouts/Main/Body'
import Router from './Visitor/Routes/route'
import ButtonScrollToTop from './Visitor/Components/ButtonScrollToTop';
import Footer from '../src/Visitor/Layouts/Footer/Footer'
import '../src/App.css';
import { useContext } from 'react';
import { ThemeContext } from './Visitor/Components/Darkmode';

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
      <Header/>
      <body style={{backgroundColor: theme.backgroundColor, color: theme.color}} className='d-flex flex-column min-vh-100'>
        <Router/>
        <ButtonScrollToTop/>
        </body>
      <Footer/>
    </div>
  );
}

export default App;