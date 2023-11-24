import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Services from "./pages/OurServices/mainPage.js";
import About from "./pages/AboutUs/index.js";
import PORTFOLIO from "./pages/PORTFOLIO/index.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import AppDev from "./pages/OurServices/App/app.js";
import AppDesign from "./pages/OurServices/App/Appdesign.js";
import WebDesign from "./pages/OurServices/Web/webDesign.js";
import ApiIntegration from "./pages/OurServices/APi/apiIntegration.js";
import DigitalMarketing from "./pages/OurServices/Digital Marketing/digitalMarketing.js";
import ECommerce from "./pages/OurServices/Ecommerce/ecommerce.js";
import AmazonWB from "./pages/OurServices/Amazon WB/amazonWb.js";
import UIExecution from "./pages/OurServices/UI/uiex.js";
import UXExection from "./pages/OurServices/UX Execution/uxex.js";
import AI from "./pages/OurServices/AI/ai.js";

// import MainPage from './pages/Home/mainSection/MainPage .js';
function App() {
  return (
    // BrowserRouter start
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/PORTFOLIO" element={<PORTFOLIO />} />
        {/* <Route path="/Team" element={<Team />} />
        <Route path="/Client" element={<Client />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/appdevelopment" element={<AppDev />} />
        <Route path="/api" element={<ApiIntegration />} />
        <Route path="/marketing" element={<DigitalMarketing />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/amazon" element={<AmazonWB />} />
        <Route path="/uiexecution" element={<UIExecution />} />
        <Route path="/uxexection" element={<UXExection />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </BrowserRouter>
    // BrowserRouter end
  );
}

export default App;
