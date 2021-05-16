import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConnexionProvider, { ConnexionContext } from "./contexts/ConnexionContext";
import Menu, { MenuItemProp } from "./menu/Menu";

const Connexion = lazy(() => import("./pages/Connexion"));
const Home = lazy(() => import("./pages/Home"));

const MENU_PROP: MenuItemProp[] = [
  { path: "/", text: "Home" },
  { path: "/Connexion", text: "Connexion" }
];

const MENU_PROP_CONNECTED: MenuItemProp[] = [
  { path: "/", text: "Home" },
  { path: "/Accounts", text: "Accounts" },
  { path: "/Disconnect", text: "Disconnect" }
]

const App: React.FC = () => {
  return (
    <ConnexionProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ConnexionContext.Consumer>
            {
              (v) => {
                if (v.connexion.connected)
                  return <Menu items={MENU_PROP_CONNECTED} />
                else 
                  return <Menu items={MENU_PROP} />
              }
            }
          </ConnexionContext.Consumer>
          <Switch>
            <Route path="/Connexion">
              <Connexion />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </ConnexionProvider>
  );
}

export default App;
