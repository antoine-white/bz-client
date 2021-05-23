import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConnexionProvider, { ConnexionContext } from "./contexts/ConnexionContext";
import Menu, { MenuItemProp } from "./menu/Menu";

const Connexion = lazy(() => import("./pages/Connexion"));
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./components/Footer"));
const User = lazy(() => import("./pages/User"));
const Account = lazy(() => import("./pages/Account"));
const Deconnexion = lazy(() => import("./pages/Deconnexion"));

const MENU_PROP: MenuItemProp[] = [
  { path: "/", text: "Home" },
  { path: "/Connexion", text: "Connexion" }
];

const MENU_PROP_CONNECTED: MenuItemProp[] = [
  { path: "/", text: "Home" },
  { path: "/Account", text: "Account" },
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
            <Route path="/Account">
              <Account />
            </Route>
            <Route path="/Disconnect">
              <Deconnexion />
            </Route>
            <Route path="/">
              <ConnexionContext.Consumer>
                {
                  (v) => {
                    if (v.connexion.connected)
                      return <User/>
                    else
                      return <Home/>
                  }
                }
              </ConnexionContext.Consumer>
            </Route>
          </Switch>
        </Suspense>
      </Router>
      { 
        // not sure if it's realy needed because the element 
        // is static but if there is a map or something that 
        // makes api calls later it's already there 
      }
      <Suspense fallback={<p>footer</p>}>
        <Footer/>
      </Suspense>
    </ConnexionProvider>
  );
}

export default App;
