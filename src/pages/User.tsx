import { useContext } from "react";
import { Link } from "react-router-dom";
import { ConnexionContext } from "..";

const User : React.FC = () => {
    const { connexion } = useContext(ConnexionContext);
    return (
        <main className="container p-4">
            <h1>Hello {connexion.username} !</h1>
            <Link  to="/Account">See account</Link>
            <br/>
            { (connexion.startDate !== undefined)?<small className="my-4">Connected since {connexion.startDate.toUTCString()}</small >:<></>}
        </main>
    )
}

export default User;