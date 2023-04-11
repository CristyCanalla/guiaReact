
import Categorias from './Categorias';
import CartWidget from './CardWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

      <nav className='navbar navbar-expand-lg bg-navbar text-white'>
         <div class="container-fluid">
            <Link class="navbar-brand text-reset" to={"/"}>BUHO MATES</Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Categorias/>
              <CartWidget/>
        </div>
      </div>
    </nav>

    );
}

export default Navbar;
