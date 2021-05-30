import { useEffect } from "react";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { API_URL } from "../consts";
import { ConnexionContext } from "../contexts/ConnexionContext";

const Deconnexion: React.FC = () => {
    
    const [redirect, setRedirect] = useState<string>("");
    const [errors, setErrors] = useState<string>("");
    const { connexion, disconnect } = useContext(ConnexionContext);

    useEffect(()=>{
        if (!connexion.connected)
            setRedirect("/Connection");
    },[connexion.connected]);    

    const disconnectFetch = async () => {
        const params = [
            ["token", connexion.token],
        ];
        let url = new URL(`${API_URL}disconnect/`);
        url.search = new URLSearchParams(params).toString();
        try {
            const response = await fetch(url.toString());
            if (response.status === 200) {
                disconnect();
                setRedirect("/");
            } else {
                setErrors("Error in disconnecting");
            }
        } catch (error) {
            setErrors("Error in disconnecting");
            //console.error(error);
        }
    }

    if (redirect !== "") {
        return <Redirect to={redirect} />
    }
    return (
        <main className="container ">
            {errors && <p>{errors}</p>}
            <button className="my-4 row btn btn-danger" onClick={() => {disconnectFetch()}}>Disconnect</button>
        </main>
    );
}

export default Deconnexion;