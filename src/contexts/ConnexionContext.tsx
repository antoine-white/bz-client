import React, {createContext} from "react";
import { JsxElement } from "typescript";

interface IConnexion {
    connected : boolean,
    token : string,
    username : string,
    // TODO: when the user is innactive from some time the server 
    // not accecpt the token so we could save some some uselles server
    // calls by checking it on the even if it'll be checked by the 
    // server anyway
    startDate? : Date
}
  
type ContextType = {
    connexion : IConnexion
    connect: (newCo: IConnexion) => void
    disconnect: () => void
}


const INITIAL_STATE = {
    connected:false,
    username:"",
    token:""
};

const initial : ContextType ={
    connexion : INITIAL_STATE,
    connect : ()=>{},
    disconnect : ()=>{}
} 

export const ConnexionContext = createContext<ContextType>(initial);

//IDK whuy but it only works with Function type annotation ... weird
const ConnexionProvider: Function  = ({ children } : JsxElement) => {
    const [connexion, setConnexion] = React.useState<IConnexion>(INITIAL_STATE);

    const connect =  (newCo: IConnexion) : void => { setConnexion(newCo); }
    const disconnect=  () => { setConnexion(INITIAL_STATE); }

    console.log(children)

    return (
        <ConnexionContext.Provider
          value={{
            connexion,
            connect,
            disconnect
          }}
        >
          {children}
        </ConnexionContext.Provider>
      );
};

export default ConnexionProvider;
