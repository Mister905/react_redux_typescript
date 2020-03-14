import * as React from "react";

import CharacterList from "./components/character_list/CharacterList";

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>The Force Awakens</h1>
      <CharacterList />
    </>
  );
};

export default App;
