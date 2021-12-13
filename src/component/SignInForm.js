import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signIn } from '../redux/user/user';
import '../css/SignInForm.css';

const SignInForm = () => {
  const dispatch = useDispatch();
  const signInAction = bindActionCreators(signIn, dispatch);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="row bg-image-sign-in mx-0 d-flex flex-column justify-content-center align-items-center">
      <div className="col-sm-6">
        <h2 className="light-font">Iniciar Sesión</h2>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            await signInAction(email, password);
            setEmail('');
            setPassword('');
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </Form.Group>
          <button type="submit" className="button-submit p-2">
            <span className="shadowed">Enviar</span>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
