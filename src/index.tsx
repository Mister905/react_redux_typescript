import * as React from "react";
import * as ReactDOM from "react-dom";

/* Make the store available to all components in the application without passing it explicitly */
import { Provider } from "react-redux";

// Store type from Redux
import { Store } from "redux";

// Import the store function and state
import configure_store, { IAppState } from "./store";
import { get_all_characters } from "./actions/character";

import App from "./App";

interface IProps {
  store: Store<IAppState>;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider
*/
const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Generate the store
const store = configure_store();
store.dispatch(get_all_characters());

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root") as HTMLElement
);
