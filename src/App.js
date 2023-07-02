import { useEffect, useState } from "react";
import "./index.css";
import { db } from "./config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

function App() {
  const [nome, setnome] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, "usuarios");

  async function criarUser() {
    const user = await addDoc(userCollectionRef, {
      nome, email
    });
    console.log(user)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  async function deleteUser(id) {
    const userDoc = doc(db, 'usuarios', id);
    await deleteDoc(userDoc);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nome..."
        value={nome}
        onChange={(e) => setnome(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={criarUser}>Criar user</button>

      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <li>{user.nome}</li>
              <li>{user.email}</li>
              <button onClick={() => deleteUser(user.id)}>Deletar</button>
            </div>
          );
        })}
      </ul>
    </div>

    // <div classnome="App">
    //   <form>
    //     <label id='nome'>nome:</label>
    //     <input id='nome' nome='nome' type='text' />

    //     <label id='email'>Email:</label>
    //     <input id='email' nome='email' type='email' />

    //     <label id='senha'>Senha:</label>
    //     <input id='senha' nome='senha' type='password' />
    //   </form>
    // </div>
  );
}

export default App;
