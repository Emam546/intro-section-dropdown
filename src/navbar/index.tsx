import "./style.scss";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ps-sm-5 pe-sm-5 overflow-hidden">
                <a className="navbar-brand p-0 me-5 flex-shrink-0" href="#">
                    <img
                        src="./images/logo.svg"
                        className="img-fluid h-100"
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end "
                    data-tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close ms-auto"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body ">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>Features</span>
                                    <img
                                        src="./images/icon-arrow-up.svg"
                                        className="up"
                                        alt=""
                                    />
                                    <img
                                        src="./images/icon-arrow-down.svg"
                                        className="down"
                                        alt=""
                                    />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img
                                                src="./images/icon-todo.svg"
                                                alt=""
                                            />
                                            <span>Todo List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img
                                                src="./images/icon-calendar.svg"
                                                alt=""
                                            />
                                            <span>Calender</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img
                                                src="./images/icon-reminders.svg"
                                                alt=""
                                            />
                                            <span>Reminders</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img
                                                src="./images/icon-planning.svg"
                                                alt=""
                                            />
                                            <span>Planning</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>Company</span>
                                    <img
                                        src="./images/icon-arrow-up.svg"
                                        className="up"
                                        alt=""
                                    />
                                    <img
                                        src="./images/icon-arrow-down.svg"
                                        className="down"
                                        alt=""
                                    />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <span>History</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <span>Our Team</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <span>Blog</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Courses
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <a href="#" className="btn me-lg-4">Login</a>
                        <a href="#" className="btn border-primary rounded-4">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
