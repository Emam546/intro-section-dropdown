import "./style.scss";
export default function Landing() {
    return (
        <section className="landing mt-3 mt-md-5 pt-md-5">
            <div className="container">
                <div className="row flex-md-row-reverse">
                    <div className="col-md-6">
                        <div className="image-container">
                            <img
                                src="./images/image-hero-mobile.png"
                                className="img-fluid d-md-none"
                                alt=""
                            />
                            <img
                                src="./images/image-hero-desktop.png"
                                className="img-fluid d-none d-md-block"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content-container text-center text-md-start">
                            <div className="pt-lg-5">
                                <h1 className="fw-bold display-3 mt-lg-5">
                                    Make remote work
                                </h1>
                                <p>
                                    Get your team in sync, no matter your
                                    location. Streamline processes, create team
                                    rituals, and watch productivity soar.
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-primary rounded-4 fw-bold"
                                >
                                    Learn more
                                </a>
                            </div>
                            <div className="flex-grow-1 d-flex align-items-end">
                                <div className="logos-container w-100">
                                    <img src="./images/client-databiz.svg" alt="client-databiz" />
                                    <img src="./images/client-audiophile.svg" alt="client-audiophile" />
                                    <img src="./images/client-meet.svg" alt="client-meet" />
                                    <img src="./images/client-maker.svg" alt="client-maker" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
