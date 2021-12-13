import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';
import { signUp } from '../redux/user/user';
import '../css/SignUpForm.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const signUpAction = bindActionCreators(signUp, dispatch);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <div className="row bg-image-sign-up mx-0 d-flex flex-column justify-content-center align-items-center">
      <div className="col-sm-6">
        <h2 className="light-font">Iniciar Sesión</h2>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            await signUpAction(userName, email, password, passwordConfirmation);
            setEmail('');
            setPassword('');
            setUserName('');
            setPasswordConfirmation('');
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

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder="User Name"
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
              placeholder="Password Confirmation"
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

export default SignUpForm;