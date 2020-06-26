import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import PersistentDrawer from "./components/Drawer";
import BottomNav from "./components/BottomNavigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore } from "redux";
import action from "./actions/actions";

function App() {
  console.log(action);
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <PersistentDrawer />
        <BottomNav />
      </React.Fragment>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
