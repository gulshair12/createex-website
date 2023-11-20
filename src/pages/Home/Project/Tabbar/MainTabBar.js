import React, { useState } from "react";
import CustomTab from "./TabBar.js";
import UIuX from "./pages/uiUx.js";
import Development from "./pages/Development.js";
import Graphicdesign from "./pages/graphicDesign.js";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("UIuX");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <CustomTab activeTab={activeTab} onTabClick={handleTabClick} />

      {activeTab === "UIuX" && <UIuX />}
      {activeTab === "Development" && <Development />}
      {activeTab === "Graphicdesign" && <Graphicdesign />}
    </div>
  );
};

export default MainTab;
