
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './componets/AddUser/AddUser';
import Home from './componets/Home/Home';
import UpdateUser from './componets/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
