import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import SignInForm from './component/SignInForm';
import NavBar from './component/NavBar';
import CreateAddress from './component/CreateAddress';
import AddressesLists from './component/AddressesLists';
import UpdateAddress from './component/UpdateAddress';

function App() {
  return (
    <div className="App container-fluid d-flex justify-content-center flex-column px-0">
      <Router>
        <NavBar className="" />
        <Routes>
          <Route exact path="/" element={<CreateAddress />} />
          <Route exact path="/sign_up" element={<SignUpForm />} />
          <Route exact path="/sign_in" element={<SignInForm />} />
          <Route exact path="/Addresses_lists" element={<AddressesLists />} />
          <Route exact path="/Address/:id" element={<UpdateAddress />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
