import { useState } from 'react';
import './index.css';

import db from "./config/firebase";


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <form>
        <label id='name'>Name:</label>
        <input id='name' name='name' type='text' />

        <label id='email'>Email:</label>
        <input id='email' name='email' type='email' />

        <label id='senha'>Senha:</label>
        <input id='senha' name='senha' type='password' />
      </form>
    </div>
  );
}

export default App;
