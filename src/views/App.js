import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import GamePanel from "../components/organisms/GamePanel/GamePanel";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GamePanel />
    </div>
  );
}

export default App;
