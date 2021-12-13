import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react';
import { fetchUser } from '../redux/user/user';
import { Image, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineAddLocation } from 'react-icons/md';
import { createAddress } from '../redux/address/address';
import logo from '../assets/images/easy-address-logo.png';
import '../css/CreateAddress.css';

const CreateAddress = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const fetchUserAction = bindActionCreators(fetchUser, dispatch);

  useEffect(async () => {
    await fetchUserAction();
  }, []);

  const createAddressAction = bindActionCreators(createAddress, dispatch);

  const [addressStreet, setAddressStreet] = useState('');
  const [addressExternalNumber, setAddressExternalNumber] = useState('');
  const [addressInternalNumber, setAddressInternalNumber] = useState('');
  const [addressPostalCode, setAddressPostalCode] = useState('');
  const [addressColony, setAddressColony] = useState('');
  const [addressMunicipality, setAddressMunicipality] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressCountry, setAddressCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('street', addressStreet);
    formData.append('external_number', addressExternalNumber);
    formData.append('internal_number', addressInternalNumber);
    formData.append('postal_code', addressPostalCode);
    formData.append('colony', addressColony);
    formData.append('municipality', addressMunicipality);
    formData.append('city', addressCity);
    formData.append('state', addressState);
    formData.append('country', addressCountry);
    await createAddressAction(formData);
    setAddressStreet('');
    setAddressExternalNumber('');
    setAddressInternalNumber('');
    setAddressPostalCode('');
    setAddressColony('');
    setAddressMunicipality('');
    setAddressCity('');
    setAddressState('');
    setAddressCountry('');
    e.target.reset();
  };

  return (
    <>
      {user.name ? (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height bg-image-create-address">
          <div className="col-8">
            <h2 className="light-font">Agrega una dirección</h2>
            {/*<InputGroup className="mb-3">
              <FormControl
                placeholder="Coloca tu dirección"
                aria-label="Coloca tu dirección"
                aria-describedby="basic-addon2"
              />
              <Button variant="success" id="button-addon2">
                <MdOutlineAddLocation className="me-2" />
                Agregar dirección
              </Button>
            </InputGroup>*/}
            <Form
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicStreet">
                <Form.Control
                  type="input"
                  value={addressStreet}
                  onChange={(e) => {
                    setAddressStreet(e.target.value);
                  }}
                  placeholder="street"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicExternalNumber">
                <Form.Control
                  type="input"
                  value={addressExternalNumber}
                  onChange={(e) => {
                    setAddressExternalNumber(e.target.value);
                  }}
                  placeholder="external_number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicInternalNumber">
                <Form.Control
                  type="input"
                  value={addressInternalNumber}
                  onChange={(e) => {
                    setAddressInternalNumber(e.target.value);
                  }}
                  placeholder="internal_number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPostalCode">
                <Form.Control
                  type="input"
                  value={addressPostalCode}
                  onChange={(e) => {
                    setAddressPostalCode(e.target.value);
                  }}
                  placeholder="postal_code"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicColony">
                <Form.Control
                  type="input"
                  value={addressColony}
                  onChange={(e) => {
                    setAddressColony(e.target.value);
                  }}
                  placeholder="colony"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMunicipality">
                <Form.Control
                  type="input"
                  value={addressMunicipality}
                  onChange={(e) => {
                    setAddressMunicipality(e.target.value);
                  }}
                  placeholder="municipality"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Control
                  type="input"
                  value={addressCity}
                  onChange={(e) => {
                    setAddressCity(e.target.value);
                  }}
                  placeholder="city"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicState">
                <Form.Control
                  type="input"
                  value={addressState}
                  onChange={(e) => {
                    setAddressState(e.target.value);
                  }}
                  placeholder="state"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCountry">
                <Form.Control
                  type="input"
                  value={addressCountry}
                  onChange={(e) => {
                    setAddressCountry(e.target.value);
                  }}
                  placeholder="country"
                />
              </Form.Group>

              <button type="submit" className="button-submit p-2">
                <span className="shadowed">Enviar</span>
              </button>
            </Form>
          </div>
        </div>
      ) : (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height bg-image">
          <Image src={logo} bg="transparent" className="image-size-home border-0 mb-3 shadowed" />
          <h3 className="light-font">
            <Link to="/sign_in" className="light-font">Iniciar sesión</Link>
            {' '}
            o&nbsp;
            <Link to="/sign_up" className="light-font">Crea una cuenta</Link>
            {' '}
            para que puedas agregar tus direcciones.
          </h3>
        </div>
      )}
    </>
  );
};

export default CreateAddress;
