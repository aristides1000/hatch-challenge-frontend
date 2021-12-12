import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { FiUserPlus } from 'react-icons/fi';
import { FaSignInAlt } from 'react-icons/fa';
import SignOutButton from './SignOutButton';
import { fetchUser } from '../redux/user/user';
import logo from '../assets/images/easy-address-logo.png';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchUserAction = bindActionCreators(fetchUser, dispatch);

  useEffect(async () => {
    await fetchUserAction();
  }, []);

  return (
    <Navbar expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <Image src={logo} className="image-size border-0" thumbnail />
          <span className="ml-2">Easy Address</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-end align-items-center">
          {user.name ? (
          <>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Agregar una dirección</Nav.Link>
              <Nav.Link href="/Addresses_lists">Mis direcciones</Nav.Link>
            </Nav>
            <p className="pe-1 m-0">
              Bienvenido de nuevo
              <span className="ms-2 text-uppercase">{user.name}</span>
            </p>
            <SignOutButton />
            </>
          ) : (
            <>
              <Button className="mx-2">
                <Link to="/sign_in" className="link-light">
                  <FaSignInAlt className="me-2" />
                  Iniciar sesión
                </Link>
              </Button>
              <Button className="mx-1">
                <Link to="/sign_up" className="link-light">
                  <FiUserPlus className="me-2" />
                  Crear cuenta
                </Link>
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;