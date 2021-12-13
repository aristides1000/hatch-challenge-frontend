import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '../redux/user/user';
import '../css/SignOutButton.css';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const signInAction = bindActionCreators(signOut, dispatch);

  return (
    <Button bg="transparent" type="button" onClick={() => signInAction()} className="mx-2 btn btn-link shadowed ps-3 border-2 border-light">
      <FaSignOutAlt className="me-2" />
      Cerrar sesión
    </Button>
  );
};

export default SignOutButton;
