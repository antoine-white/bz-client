import react, { useContext } from "react";
import { ConnexionContext } from "..";

const User : React.FC = () => {
    const { connexion } = useContext(ConnexionContext);
    console.log(connexion); 
    return (
        <p>
            User
        </p>
    )
}

export default User;