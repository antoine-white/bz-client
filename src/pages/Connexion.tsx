import { useRef, useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { API_URL } from "../consts";
import { ConnexionContext } from "../contexts/ConnexionContext";

export const DEFAUT_REDIRECTION = "/";

const Connexion: React.FC = () => {
    const [redirect, setRedirect] = useState<string>("");
    const [errors, setErrors] = useState<string>("");
    const { connexion, connect } = useContext(ConnexionContext);

    const inputEl = useRef<HTMLInputElement>(null);
    const passwordEl = useRef<HTMLInputElement>(null);

    const fecthConnect = async () => {
        if (inputEl && inputEl.current && passwordEl && passwordEl.current) {
            const params = [
                ["name", inputEl.current.value],
                ["password", passwordEl.current.value],
            ];
            let url = new URL(`${API_URL}connect/`);
            url.search = new URLSearchParams(params).toString();
            try {
                const response = await fetch(url.toString());
                if (response.status === 200) {
                    const json = await response.json();
                    connect({
                        connected: true,
                        username: json.login,
                        token: json.token,
                        startDate : new Date()
                    });
                    setRedirect(DEFAUT_REDIRECTION);
                } else {
                    setErrors("Error in authentification");
                }
            } catch (error) {
                setErrors("Error in authentification");
                //console.error(error);
            }
        }
    }

    if (redirect !== "") {
        return <Redirect to={redirect} />
    }
    return (
        <main>
            <section>
                <p>{errors}</p>
                <div>
                    <label htmlFor="name">Username</label>
                    <input ref={inputEl} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="pwd">password</label>
                    <input ref={passwordEl} type="password" id="pwd" />
                </div>
                <button onClick={() => fecthConnect()}>Connect</button>
            </section>
            {JSON.stringify(connexion)}

        </main>
    )
}

export default Connexion;