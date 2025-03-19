import './App.css';
import Home from './page/Home'
import About from './page/About'
import Services from './page/Services'
import Contact from './page/Contact'
import Error from './page/Error'
import { Route, Routes} from 'react-router-dom'
import MyNavbar from './component/Navbar';
import Footer from './component/Footer';
import "./css/templatemo-sixteen.css"
import Users from './page/Users';


function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Services />} path='/service' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Users />} path='/user' />
        <Route element={<Error />} path='/*' />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
