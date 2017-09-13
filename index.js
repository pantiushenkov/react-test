import React from "react";
import Scoreboard from "./src/containers/Scoreboard";
import {Provider} from "react-redux";
import {createStore} from "redux";
import PlayerReducer from "./src/reducers/player";
import {render} from "react-dom";

const store = createStore(
  PlayerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store = {store}>
    <Scoreboard/>
  </Provider>,document.getElementById("root")
)
