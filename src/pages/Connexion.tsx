import { useRef, useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { API_URL } from "../consts";
import { ConnexionContext } from "../contexts/ConnexionContext";

export const DEFAUT_REDIRECTION = "/";

const Connexion: React.FC = () => {
    const [redirect, setRedirect] = useState<string>("");
    const [errors, setErrors] = useState<string>("");
    const { connect } = useContext(ConnexionContext);

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
        <main className="container p-4">
            <section className="form-group col-sm border border-primary rounded p-4">
                <h1>Connect or sign in</h1>
                <p>{errors}</p>
                <div >
                    <label htmlFor="name">Username</label>
                    <input className="form-control" ref={inputEl} type="text" id="name" />
                </div>
                <div className="py-4">
                    <label htmlFor="pwd">Password</label>
                    <input className="form-control" ref={passwordEl} type="password" id="pwd" />
                </div>
                <button style={{marginTop : "1em"}} className="btn btn-primary" onClick={() => fecthConnect()}>Connect</button>
            </section>
        </main>
    )
}

export default Connexion;