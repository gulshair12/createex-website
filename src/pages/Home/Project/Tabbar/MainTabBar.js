import React, { useState } from "react";
import CustomTab from "./TabBar.js";
import All from "./pages/uiUx.js";
import AppDevelopment from "./pages/Development.js";
import Graphic from "./pages/graphicDesign.js";
import Appdesign from "./pages/Appdesign.js";
import WebDesign from "./pages/WebDesign.js";
import WebDevelpoment from "./pages/WebDevelopment.js";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <CustomTab activeTab={activeTab} onTabClick={handleTabClick} />

      {activeTab === "All" && <All />}
      {activeTab === "Appdesign" && <Appdesign />}
      {activeTab === "WebDesign" && <WebDesign />}
      {activeTab === "Graphic" && <Graphic />}
      {activeTab === "AppDevelopment" && <AppDevelopment />}
      {activeTab === "WebDevelpoment" && <WebDevelpoment />}
    </div>
  );
};

export default MainTab;
