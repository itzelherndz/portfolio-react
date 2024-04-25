import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Header() {
    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-lg">
                    <h1>Itzel Hernandez</h1>
                </div>
                <div className="col-lg-auto col-md-12">
                    <Navbar
                        links ={[
                            <Link key={1} to="/">
                                About Me
                            </Link>,
                            <Link key={2} to="/portfolio">
                                Portfolio
                            </Link>,
                            <Link key={3} to="/contact">
                                Contact
                            </Link>,
                            <Link key={4} to="/resume">
                                Resume
                            </Link>
                        ]}
                    />
                </div>
            </div>
        </header>
    );
}