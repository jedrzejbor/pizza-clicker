import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import GamePanel from "../components/organisms/GamePanel/GamePanel";
import UpgradePanel from "../components/organisms/UpgradePanel/UpgradePanel";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GamePanel />
      <UpgradePanel />
    </div>
  );
}

export default App;
