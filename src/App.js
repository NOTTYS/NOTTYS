import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Visitor/Layouts/Header/Header'
import Body from '../src/Visitor/Layouts/Main/Body'
import Footer from '../src/Visitor/Layouts/Footer/Footer'
import Test from './Visitor/Pages/Test'
import '../src/App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  AOS.init()
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;