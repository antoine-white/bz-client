import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="container" >
            <div className="row  my-4">
                <section className="col-md order-lg-2 order-md-2">
                    <img src="undraw_revenue_3osh.svg" alt="" style={{ maxHeight: "min(50vw,50vh)", height: "100%", width: "100%", }} />
                </section>
                <section className="col-md order-lg-1 order-md-1 d-flex flex-column justify-content-center">
                    <div style={{ marginBottom: 20, fontSize: "1.5em" }}>
                        <h1 style={{ fontSize: "2em", marginBottom: 5 }}>Online banking reinvented</h1>
                        <p>Bz-Bank reinvent online banking .....</p>
                    </div>
                    <div className="d-flex flex-column align-items-strech" style={{ maxWidth: 500 }}>
                        <button className="btn btn-primary btn-lg add-button my-4"><Link style={{ color: "white", textDecoration: "none" }} to="/Connexion">Start now</Link></button>
                    </div>
                </section>
            </div>
            <div className="container" style={{ marginTop: "5em" }}>
                {<HomeCard title="Credit card" content="We will have credit card eventually " imgData={{ src: "undraw_Credit_card_re_blml.svg", alt: "card" }} />}
                {<HomeCard title="Work accross device" content="Somewhat responsive thanks to bootstrap" imgData={{ src: "undraw_Mobile_pay_re_sjb8.svg", alt: "mobile" }} />}
                {<HomeCard title="banking" content="..." imgData={{ src: "", alt: "" }} />}
            </div>
        </div>
    )
}

interface CardProp {
    title: string;
    content: string;
    smallText?: string;
    imgData: {
        src: string;
        alt: string;
    }
}

const HomeCard: React.FC<CardProp> = ({ imgData, title, content }) => (
    <div className="row shadow-lg p-3 mb-5 bg-white rounded" style={{ marginTop: "10vh" }}>
        <div className="col-md">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        <div className="col-md">
            <img src={imgData.src} alt={imgData.alt} style={{ maxHeight: "min(40vw,40vh)", height: "100%", width: "100%", }} />
        </div>
    </div>
)

export default Home;