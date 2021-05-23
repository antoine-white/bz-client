import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnexionContext } from "..";

const User : React.FC = () => {
    const { connexion } = useContext(ConnexionContext);
    console.log(connexion); 
    return (
        <main>
            <h1>Hello {connexion.username} !</h1>
            <Link to="/Account">See account</Link>
            { (connexion.startDate === undefined)?<p>Connected since {connexion.startDate}</p>:<></>}
        </main>
    )
}

export default User;