import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';
import AllPets from'./views/AllPets';
import CreatePet from './views/CreatePet';
import EditPet from './views/EditPets';
import OnePet from './views/OnePet';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
     <Router>
        <AllPets path="/pets/" />
        <CreatePet path="/pets/new"/>
        <EditPet path="/pets/update/:id"/>
        <OnePet path="/pets/:id" />
      </Router>
    
    </div>
  );
}

export default App;