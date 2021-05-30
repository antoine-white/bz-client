//import react from "react";

const Footer : React.FC = () => {
    return (
        <footer className=" footer fixed-bottom bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                <div className=" col-md-12 bg-light">
                    <h5 className="text-uppercase">BZ BANK</h5>
                    <p>
                    BZ BANK will always have your back! This is our menta since we were founded, back in 2021!
                    </p>
                </div>      
                </div>
            </div>

            <div className="text-center p-3 bg-secondary " >
                © 2021 Copyright: BZ BANK (not really)
            </div>
        </footer>
    )
}

export default Footer;