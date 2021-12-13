import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdOutlineAddLocation } from 'react-icons/md';
import { allAddresses, deleteAddress } from '../redux/address/address';
import '../css/AddressesLists.css';

const AddressesLists = () => {
  const dispatch = useDispatch();
  const allAddressesAction = bindActionCreators(allAddresses, dispatch);
  const deleteAddressAction = bindActionCreators(deleteAddress, dispatch);
  const addresses = useSelector((state) => state.addresses.allAddresses);
  const loading = useSelector((state) => state.addresses.loading);
  const user = useSelector((state) => state.user);

  useEffect(async () => {
    if (loading) {
      await allAddressesAction();
    }
  }, []);

  const renderAddresses = () => {
    const result = [];
    for (let i = 0; i < addresses.length; i += 1) {
      result.push(
        <tr key={i}>
          <td>{addresses[i].street}</td>
          <td>{addresses[i].external_number}</td>
          <td>{addresses[i].internal_number}</td>
          <td>{addresses[i].postal_code}</td>
          <td>{addresses[i].colony}</td>
          <td>{addresses[i].municipality}</td>
          <td>{addresses[i].city}</td>
          <td>{addresses[i].state}</td>
          <td>{addresses[i].country}</td>
          <td className="text-center">
            <Link to={`/address/${addresses[i].id}`}>
              <AiFillEdit />
            </Link>
          </td>
          <td className="text-center">
            <Button variant="outline-danger" onClick={async () => deleteAddressAction(addresses[i].id)}>
              <RiDeleteBinFill />
            </Button>
          </td>
        </tr>
      );
    }
    return result;
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height bg-image">
      <h1 className="mb-3 shadowed text-light">Mis direcciones</h1>
      <Table striped bordered hover className="mx-5 table-transparency border border-light text-light shadowed">
        <thead className="text-center">
          <tr>
            <th>Calle</th>
            <th>Número Exterior</th>
            <th>Número Interior</th>
            <th>Código Postal</th>
            <th>Colonia</th>
            <th>Municipio</th>
            <th>Ciudad</th>
            <th>Estado</th>
            <th>País</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {!loading && renderAddresses()}
          <tr className="text-center">
            <td colSpan={11}>
              <Link to="/">
                <Button variant="btn btn-success"><MdOutlineAddLocation className="me-2" />Agregar una nueva dirección
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AddressesLists;