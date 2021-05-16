import { useContext } from "react";
import { ConnexionContext } from "../contexts/ConnexionContext";

const Connexion : React.FC = () => {
    const { connexion, connect } = useContext(ConnexionContext);
    return (
        <p>
            {JSON.stringify(connexion)}
            <button onClick={()=>connect({
                connected : true, 
                username :"hello there",
                token:"4zefe65zf4ez6f54ezf1ez6c1sd6tjyk14156qf19zf1ze5f1ez6f1e"
                })}>Connect</button>
        </p>
    )
}

export default Connexion;