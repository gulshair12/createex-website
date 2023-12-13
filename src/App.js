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
import Graphic from "./pages/OurServices/Graphics/index.js";
import AI from "./pages/OurServices/AI/ai.js";
import WebDevelopment from "./pages/OurServices/Web/index.js";
import ErpSolutions from "./pages/OurServices/ErpSolutions/ErpSolutions.js";
import Branding from "./pages/OurServices/Branding/Branding.js";
import Project from "./pages/Home/Project/index.js";
import ScrollToTop from "./ScrolltoTop.js";
import DetailPage from "./pages/PORTFOLIO/AppDetails/Detail.js";

// import MainPage from './pages/Home/mainSection/MainPage .js';
function App() {
  return (
    // BrowserRouter start
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Project" element={<Project />} />
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
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/erpsolutions" element={<ErpSolutions />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/PORTFOLIO/detailpage" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
    // BrowserRouter end
  );
}

export default App;
