import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './component/SignUpForm';
import SignInForm from './component/SignInForm';
import NavBar from './component/NavBar';
import CreateAddress from './component/CreateAddress';
import AddressesLists from './component/AddressesLists';

function App() {
  return (
    <div className="App container-fluid d-flex justify-content-center flex-column">
      <Router>
        <NavBar className="" />
        <Routes>
          <Route exact path="/" element={<CreateAddress />} />
          <Route exact path="/sign_up" element={<SignUpForm />} />
          <Route exact path="/sign_in" element={<SignInForm />} />
          <Route exact path="/Addresses_lists" element={<AddressesLists />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
