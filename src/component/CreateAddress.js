import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/user/user';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/easy-address-logo.png';
import '../css/CreateAddress.css';

const CreateAddress = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchUserAction = bindActionCreators(fetchUser, dispatch);

  useEffect(async () => {
    await fetchUserAction();
  }, []);

  return (
    <>
      {user.name ? (
        <p>Create address</p>
      ) : (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height">
          <Image src={logo} className="image-size-home border-0 mb-3" thumbnail />
          <p>
            <Link to="/sign_in">Iniciar sesión</Link>
            {' '}
            o&nbsp;
            <Link to="/sign_up">Crea una cuenta</Link>
            {' '}
            para que puedas agregar tus direcciones.
          </p>
        </div>
      )}
    </>
  );
};

export default CreateAddress;
