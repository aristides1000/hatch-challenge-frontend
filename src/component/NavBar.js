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
    <Navbar bg="transparent" className="sticky-top position-absolute" expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand href="/">
          <Image src={logo} bg="transparent" className="image-size border-0 shadowed" />
          <span className="ml-2 shadowed text-light">Easy Address</span>
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
              <Nav.Link href="/" className="shadowed link-light">Agregar una dirección</Nav.Link>
              <Nav.Link href="/Addresses_lists" className="shadowed link-light">Mis direcciones</Nav.Link>
            </Nav>
            <p className="pe-1 m-0 ms-auto shadowed text-light border-start ps-3 ms-1">
              Bienvenido de nuevo
              <span className="ms-2 text-uppercase">{user.name}</span>
            </p>
            <SignOutButton />
            </>
          ) : (
            <>
              <Link to="/sign_in" className="link-light border-start shadowed text-decoration-none ps-3 border-2 border-light pe-1">
                <FaSignInAlt className="me-2" />
                Iniciar sesión
              </Link>
              <Link to="/sign_up" className="link-light ms-2 border-start shadowed text-decoration-none ps-3 border-2 border-light">
                <FiUserPlus className="me-2" />
                Crear cuenta
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;