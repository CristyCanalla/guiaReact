import { Link } from "react-router-dom";
const Categorias = () => {
    return ( 
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/1"}>Mates</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/2"}>Bombillas</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/3"}>Termos</Link>

                </li>
                <li className="nav-link text-reset">

                        <Link className="nav-link text-reset" to={"/category/4"}>Yerbas</Link>

                </li>
            </ul>

    );
}

export default Categorias;