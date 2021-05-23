import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { ConnexionContext } from "../contexts/ConnexionContext";

const Deconnexion: React.FC = () => {
    
    const [redirect, setRedirect] = useState<string>("");

    const { connexion, disconnect } = useContext(ConnexionContext);
    if (redirect !== "") {
        return <Redirect to={redirect} />
    }
    return (
        <p>
            {JSON.stringify(connexion)}
            <button onClick={() => {
                disconnect();
                setRedirect("");
            }}>Disconnect</button>
        </p>
    )
}

export default Deconnexion;