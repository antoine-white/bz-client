import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { ConnexionContext } from "..";
import { API_URL } from "../consts";
import Account , { account } from "../components/Account";


const Accounts : React.FC = () => {

    const [loaded,setLoaded] = useState<boolean>(false);
    const [account,setAccount] = useState<account>();
    const [errors, setErrors] = useState<string>("");
    const [redirect, setRedirect] = useState<string>("");

    const { connexion } = useContext(ConnexionContext);

    useEffect(()=> {
        const tmp = async () =>{
            const params = [
                ["token", connexion.token],
            ];
            let url = new URL(`${API_URL}account/`);
            url.search = new URLSearchParams(params).toString();
            try {
                const response = await fetch(url.toString());
                if (response.status === 200) {
                    const json = await response.json();
                    console.log(json);
                    setAccount({
                        money : json.money,
                        name : json.name,
                    });
                    setLoaded(true);                    
                } else if (response.status === 403) {
                    setRedirect("/Connexion");
                }
            } catch (error) {
                setErrors(error);
            }
        }
        if (!connexion.connected)
            setRedirect("/Connection");
        else 
            tmp();
    },[connexion]);

    if (redirect !== "") {
        return <Redirect to={redirect} />
    } else if (!loaded) {
        return <p>Loading ...</p>
    } else if(errors !== ""){
        return <p>Error in loading account</p>
    }else {
        return (
            <main>
                <Account {...account}/>
            </main>
        );
    }
}

export default Accounts;