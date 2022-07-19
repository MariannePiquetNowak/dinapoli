import Nav from "../../Components/Navbar/Navbar";
import headImg from '../../assets/images/header-img.png';
import logo from '../../assets/images/logo-sm.svg';
import 'animate.css';


const Header = () => {
    return (
        <header>
            <Nav />
            {/* <div className='header__bg' style={{ backgroundImage: `url(${headImg})`, backgroundSize: `cover`, backgroundPosition: `center` }}> </div> */}
            <div className="header__container animate__animated animate__fadeInDown">
                <img src={logo} alt="dinapoli-logo" />
                <div className="header__text">
                    <h1>Benvenuto !</h1>
                    <p>Des produits <strong>Italien</strong></p>
                    <p>Un pizzaiolo <strong>passionné</strong></p>
                    <p>Des pâtes à pizza <strong>fermentées*</strong></p>
                </div>
            </div>
        </header>
    )
}

export default Header;