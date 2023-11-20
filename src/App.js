import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Services from './pages/OurServices/mainPage.js';
import About from './pages/AboutUs/index.js';
import PORTFOLIO from './pages/PORTFOLIO/index.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
// import MainPage from './pages/Home/mainSection/MainPage .js';
function App() {
  return (
    // BrowserRouter start
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/PORTFOLIO' element={<PORTFOLIO />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        {/*   <Route path='/Team' element={<Team />} />
        <Route path='/Client' element={<Client />} />*/}
        <Route path='/About' element={<About />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    // BrowserRouter end
  );
}

export default App;
