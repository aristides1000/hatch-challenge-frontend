import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react';
import { fetchUser } from '../redux/user/user';
import { Image, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineAddLocation } from 'react-icons/md';
import { updateAddress } from '../redux/address/address';
import '../css/CreateAddress.css';

const UpdateAddress = () => {
  const addresses = useSelector((state) => state.addresses);
  const dispatch = useDispatch();
  const { id } = useParams();

  const address = (addresses.allAddresses).length > 0 ? addresses.allAddresses.find((address) => address.id === parseInt(id)) : {street: '', external_number: '', internal_number: '', postal_code: '', colony: '', municipality: '', city: '', state: '', country: ''};

  const updateAddressAction = bindActionCreators(updateAddress, dispatch);

  const [addressStreet, setAddressStreet] = useState(address.street);
  const [addressExternalNumber, setAddressExternalNumber] = useState(address.external_number);
  const [addressInternalNumber, setAddressInternalNumber] = useState(address.internal_number);
  const [addressPostalCode, setAddressPostalCode] = useState(address.postal_code);
  const [addressColony, setAddressColony] = useState(address.colony);
  const [addressMunicipality, setAddressMunicipality] = useState(address.municipality);
  const [addressCity, setAddressCity] = useState(address.city);
  const [addressState, setAddressState] = useState(address.state);
  const [addressCountry, setAddressCountry] = useState(address.country);

  console.log(address);

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
    await updateAddressAction(id, formData);
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
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height bg-image-create-address">
      <div className="col-8">
        <h2 className="light-font">Agrega una dirección</h2>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Coloca tu dirección"
            aria-label="Coloca tu dirección"
            aria-describedby="basic-addon2"
          />
          <Button variant="success" id="button-addon2">
            <MdOutlineAddLocation className="me-2" />
            Agregar dirección
          </Button>
        </InputGroup>
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
  );
};

export default UpdateAddress;
