
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { MdOutlineAddLocation } from 'react-icons/md';
import '../css/AddressesLists.css';

const AddressesLists = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center content-height">
      <h1 className="mb-3">Mis direcciones</h1>
      <Table striped bordered hover className="mx-5">
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
          <tr className="vertical-align">
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td className="text-center"><Button variant="outline-info"><AiFillEdit /></Button></td>
            <td className="text-center"><Button variant="outline-danger"><RiDeleteBinFill /></Button></td>
          </tr>
          <tr className="text-center">
            <td colSpan={11}>
              <Link to="/">
                <Button variant="outline-success"><MdOutlineAddLocation className="me-2" />Agregar una nueva dirección
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